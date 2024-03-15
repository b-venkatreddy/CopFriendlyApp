import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default MedicalTeam = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Medical Emergencies</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});