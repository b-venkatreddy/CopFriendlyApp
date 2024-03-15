import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import jsonData from '../violators.json';

export default MoreDetails = ({ navigation, route }) => {

    const number = route.params.number;
    
    const violator = jsonData.find(v => v.drivingLicense === number);

    const ticks = [];

    for (let i = 0; i < violator.tickets.length; i++) {
        ticks.push(violator.tickets[i]);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.heading}>Information about the violator</Text>
                    <View style={styles.details}>
                        <Text style={styles.label}>Name</Text>
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
                        <Text style={styles.label}>Mobile Number</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{violator.mobileNumber}</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.heading}>Tickets Information</Text>
                    {ticks.map((tick, index) => (
                        <View key={index} style={styles.innerBox}>
                            <Text>Amount : {tick.amount}</Text>
                            <Text>Violation Type : {tick.violationType}</Text>
                            <Text>Amount : {tick.amount}</Text>
                            <Text>Date : {tick.date}</Text>
                            <Text>Time : {tick.time}</Text>
                            <Text>Location : {tick.location}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    details: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
        width: 100,
    },
    value: {
        flex: 1,
    },
    box: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 20,
    },
    innerBox: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
    },
});