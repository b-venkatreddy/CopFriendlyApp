import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

import GetLocation from "react-native-get-location";
import jsonData from "../violators.json";

export default Ticket = ({ navigation, route }) => {

    const number = route.params.number;
    const violator = jsonData.find(v => v.drivingLicense === number);
    
    const getCurrentDateTime = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        const day = ('0' + currentDate.getDate()).slice(-2);
        const hours = ('0' + currentDate.getHours()).slice(-2);
        const minutes = ('0' + currentDate.getMinutes()).slice(-2);
        const seconds = ('0' + currentDate.getSeconds()).slice(-2);
    
        const currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return currentDateTime;
    };

    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 30000,
    })
    .then(location => {
        console.log(location);
    })
    .catch(error => {
        console.warn(error);
    })

    const [formData, setFormData] = useState({
        vehicleType: "",
        amount: "",
        dateTime: getCurrentDateTime(),
    });

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Issue Ticket</Text>
            <View style={styles.box}>
                <View style={styles.details}>
                    <Text style={styles.label}>Violator Name</Text>
                    <Text> : </Text>
                    <Text style={styles.value}>{violator.violatorName}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.label}>Driving License</Text>
                    <Text> : </Text>
                    <Text style={styles.value}>{violator.drivingLicense}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.label}>Age</Text>
                    <Text> : </Text>
                    <Text style={styles.value}>{violator.age}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.label}>mobileNumber</Text>
                    <Text> : </Text>
                    <Text style={styles.value}>{violator.mobileNumber}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.label}>Date Time</Text>
                    <Text> : </Text>
                    <Text style={styles.value}>{formData.dateTime}</Text>
                </View>

                <Picker
                    style={styles.picker}
                    selectedValue={formData.vehicleType}
                    onValueChange={value => handleInputChange('vehicleType', value)}>
                    <Picker.Item label="Select a Violation Type" value="" />
                    <Picker.Item label="speeding" value="speeding" />
                    <Picker.Item label="Parking Violation" value="Parking Violation" />
                    <Picker.Item label="running red light" value="running red light" />
                    <Picker.Item label="drunk and drive" value="drunk and drive" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>

                <View style={styles.details}>
                    <Text style={styles.label}>Amount</Text>
                    <Text> : </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={formData.amount}
                        onChangeText={value => handleInputChange('amount', value)}
                    />
                </View>

                <Text style={styles.submit}>
                    Submit
                </Text>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    box: {
        backgroundColor: "white",
        borderRadius: 20,
        height: "50%",
        width: "90%",
        minHeight: "70%",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 30,
    },
    details: {
        flexDirection: "row",
        marginBottom: 10,
        paddingLeft: 20,
        paddingTop: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
        width: '40%',
    },
    value: {
        flex: 1,
        paddingLeft: 10,
    },
    picker: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        margin: 10,
        borderRadius: 15,
    },
    input: {
        width: '30%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 5,
        marginLeft: 10,
    },
    submit: {
        width: '90%',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 50,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
        margin: 10,
    },
});