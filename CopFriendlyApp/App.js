// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import SignIn from './pages/signIn';
import Menu from './pages/menu';
import RegisterViolator from './pages/RegisterViolator';
import Ticket from './pages/ticket';
import Payment from './pages/payment';
import Emergency from './pages/emergency';
import NewViolators from './pages/newViolators';
import MoreDetails from './pages/moreDetails';
import SOSAlert from './pages/sosAlert';
import TrafficTeam from './pages/trafficTeam';
import MedicalTeam from './pages/medicalTeam';

const Stack = createStackNavigator();

export default function App() {

    const [showAlert, setShowAlert] = useState(false);

    const sos = () => {
        console.log('SOS');
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };

    const cancelSOS = () => {
        setShowAlert(false);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signin" component={SignIn} />
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="RegisterViolator" component={RegisterViolator} />
                <Stack.Screen name="TrafficTeam" component={TrafficTeam} />
                <Stack.Screen name="MedicalTeam" component={MedicalTeam} />
                <Stack.Screen name="Ticket" component={Ticket} />
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="Emergency" component={Emergency} />
                <Stack.Screen name="experiment" component={NewViolators} 
                    options={{
                        title: 'Home',
                        headerRight: () => (
                            <Text style={styles.sos} onPress={sos}>
                                SOS
                            </Text>
                        ),
                    }}
                    />
                <Stack.Screen name="moreDetails" component={MoreDetails} />
            </Stack.Navigator>
            {showAlert && <View style={styles.overlay} />}
            {showAlert && <SOSAlert onCancel={cancelSOS} />}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sos: {
        marginRight: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    soswindow: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
});
