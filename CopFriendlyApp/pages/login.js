import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_API } from './urls';

export default Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log('Logging in...');
        try {
            const res = await axios.post(LOGIN_API, {
                email: username,
                password: password,
            });
            console.log(res)
            if(res.status === 200) {
                console.log(res.data);
                await AsyncStorage.setItem('user', JSON.stringify(res.data));
                if(res.data.role === 'CentralTeam') {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'TrafficTeam' }],
                    });
                } else if(res.data.role === 'MedicalTeam') {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'MedicalTeam' }],
                    });
                } else {
                    navigation.reset({
                    index: 0,
                    routes: [{ name: 'experiment' }],
                    });
                }
            }
            else if(res.status === 400) {
                alert('Invalid Credentials');
            }
        } catch (error) {
            alert('Invalid Password')
            console.log(error)
        }
    };

    const changepage = () => {
        navigation.navigate('Signin');

        navigation.reset({
        index: 0,
        routes: [{ name: 'Signin' }],
        });
    }

    return (
        <View style={styles.container}>
        
        <Text
        style={styles.heading}>LOGIN</Text>

        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />

        <Text
        style={styles.button}
        onPress={handleLogin}>LOGIN</Text>

        <Text 
        style={styles.signin}
        onPress={changepage}>Don't Have an Account? Sign in</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 150,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 30,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        margin: 10,
    },
    button: {
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
    signin: {
        color: 'blue',
        width: '90%',
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'right',
    }
});
