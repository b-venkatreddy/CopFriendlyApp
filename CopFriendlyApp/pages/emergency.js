import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default Emergency = ({ navigation }) => {

    const [emergencyData, setEmergencyData] = useState({
        numOfPeopleAffected: "",
        location: "",
        priority: ""
    });

    const updateEmergencyData = (field, value) => {
        setEmergencyData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register an Emergency</Text>

            <View style={styles.insideContainer}>


                <Picker
                    style={styles.picker}
                    selectedValue={emergencyData.priority}
                    onValueChange={value => updateEmergencyData('priority', value)}>
                    <Picker.Item label="Select the Priority" value="" />
                    <Picker.Item label="Low" value="Low" />
                    <Picker.Item label="Mid" value="Mid" />
                    <Picker.Item label="High" value="High" />
                </Picker>

                <TextInput style={styles.input}
                    placeholder="number of people affected"
                    keyboardType="numeric"
                    value={emergencyData.numOfPeopleAffected}
                    onChangeText={value => updateEmergencyData('numOfPeopleAffected', value)}
                />

                <Text style={styles.submit}>
                    Add the Emergency
                </Text>

                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        marginTop: '10%',
        fontWeight: 'bold',
    },
    insideContainer: {
        marginTop: 30,
        borderRadius: 20,
        height: '50%',
        width: '90%',
        minHeight: '70%',
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        paddingHorizontal: 8,
        margin: 10,
        borderRadius: 15,
    },
    submit: {
        width: '90%',
        height: 40,
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'lightgreen',
        marginTop: 10,
        textAlign: 'Center'
    },
});