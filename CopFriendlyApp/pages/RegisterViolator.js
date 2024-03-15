import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DatePicker from '@react-native-community/datetimepicker';
import { Text, TextInput, View, StyleSheet, Button, ScrollView, ToastAndroid } from "react-native";
import { REGISTER_VIOLATOR } from "./urls";
// import { get } from "http";

export default RegisterViolator = ({ navigation }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

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

    const [formData, setFormData] = useState({
        violatorName: '',
        violationType: '',
        drivingLicense: '',
        mobileNumber: '',
        vehicleType: '',
        RegistrationNumber: '',
        vehicleColor: '',
        date: getCurrentDateTime(),
        location: ''
    });

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleDateChange = date => {
        setFormData(prevState => ({
        ...prevState,
        date: date || prevState.date
        }));
    };

    const handleTimeChange = time => {
        setFormData(prevState => ({
        ...prevState,
        time: time || prevState.time
        }));
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    const hideDatePickerModal = () => {
        setShowDatePicker(false);
    };

    const showTimePickerModal = () => {
        setShowTimePicker(true);
    };

    const hideTimePickerModal = () => {
        setShowTimePicker(false);
    };

    const submitForm = async () => {
        // if (formData.violatorName === "" || formData.violationType === "" || formData.drivingLicense === "" || formData.vehicleType === "" || formData.RegistrationNumber === "") {
        //     ToastAndroid.show('Please Enter all the Details', ToastAndroid.SHORT);
        //     return;
        // }
        formData = {"RegistrationNumber": "Hehehe", "date": "2024-02-29 15:04:30", "drivingLicense": "Jdisijs", "location": "", "others": "", "vehicleColor": "Black", "vehicleType": "Auto", "violationType": "running red light", "violatorName": "Test"}
        // console.log(formData);
        await axios.post(REGISTER_VIOLATOR, formData);
        console.log('Form Submitted');
        ToastAndroid.show('Form Submitted', ToastAndroid.SHORT);
        console.log(formData);
    }

    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Violators Name"
                    value={formData.violatorName}
                    onChangeText={value => handleInputChange('violatorName', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Driving License Number"
                    value={formData.drivingLicense}
                    onChangeText={value => handleInputChange('drivingLicense', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    keyboardType="numeric"
                    onChangeText={value => handleInputChange('mobileNumber', value)}
                />

                <Picker
                    style={styles.picker}
                    selectedValue={formData.violationType}
                    onValueChange={value => handleInputChange('violationType', value)}>
                    <Picker.Item label="Select a Violation Type" value="" />
                    <Picker.Item label="speeding" value="speeding" />
                    <Picker.Item label="Parking Violation" value="Parking Violation" />
                    <Picker.Item label="running red light" value="running red light" />
                    <Picker.Item label="drunk and drive" value="drunk and drive" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>


                <Picker
                    style={styles.picker}
                    selectedValue={formData?.vehicleType || null}
                    onValueChange={value => handleInputChange('vehicleType', value)}>
                    <Picker.Item label="Select a Vehicle Type" value="" />
                    <Picker.Item label="Bike" value="Bike" />
                    <Picker.Item label="Car" value="Car" />
                    <Picker.Item label="Bus" value="Bus" />
                    <Picker.Item label="Truck" value="Truck" />
                    <Picker.Item label="Auto" value="Auto" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>

                <TextInput
                    style={styles.input}
                    placeholder="Registration Number"
                    value={formData.RegistrationNumber}
                    onChangeText={value => handleInputChange('RegistrationNumber', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Vehicle Color"
                    value={formData.vehicleColor}
                    onChangeText={value => handleInputChange('vehicleColor', value)}
                />
                <Text style={styles.dateTime}>
                    Date Time : {formData.date}
                </Text>

                <Text style={styles.submit}
                onPress={submitForm}>
                    Add as Violator
                </Text>

            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    scroll: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1.5,
        borderRadius: 15,
        padding: 10,
        margin: 10,
    },
    picker: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
    },
    submit: {
        width: '90%',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
    },
    textArea: {
        width: '90%',
        height: 100,
        borderColor: 'gray',
        borderWidth: 1.5,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        textAlignVertical: 'top',
    },
    dateTime: {
        width: '90%',
        textAlign: 'center',
        fontSize: 17,
        margin: 10,
    },
});
