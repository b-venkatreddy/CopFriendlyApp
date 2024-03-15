import { Button, View, StyleSheet, Text } from 'react-native';

export default Menu = ({ navigation }) => {

    const TrafficViolation = () => {
        console.log('Registered a Traffic Violation');

        navigation.navigate('RegisterViolator');
    }

    const IssueTicket = () => {
        console.log('Issued a Ticket');

        navigation.navigate('Ticket');
    }

    const AcceptPayment = () => {
        console.log('Accepted Payment');

        navigation.navigate('Payment');
    }

    const Emergency = () => {
        console.log('Emergency');

        navigation.navigate('Emergency');
    }

    const Experiment = () => {
        console.log('Experiment');

        navigation.navigate('experiment');
    }

    const sos = () => {
        console.log('SOS');
    }

    return (
        <View style={styles.container}>

            {/* TODO: change the pages from text to recycler view or someother thing which looks good */}

            <Text
            style={styles.heading}>NAVIGATION MENU</Text>

            <Text
            style={styles.text}
            onPress={TrafficViolation}>REGISTER TRAFFIC VIOLATION</Text>

            <Text
            style={styles.text}
            onPress={IssueTicket}>ISSUE TICKET</Text>

            <Text
            style={styles.text}
            onPress={AcceptPayment}>ACCEPT PAYMENT</Text>

            <Text
            style={styles.text}
            onPress={Emergency}>EMERGENCY</Text>

            <Text
            style={styles.text}
            onPress={Experiment}>EXPERIMENT</Text>

            <Text 
            style={styles.sos}
            onPress={sos}>SOS</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    sos : {
        backgroundColor: 'rgba(255, 100, 100, 0.8)',
        borderRadius: 100,
        paddingHorizontal: 30,
        paddingVertical: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginTop: 30,
        fontWeight: 'bold',
    },
    text : {
        flex: 0.05,
        textAlign: 'center',
        width: '90%',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'lightblue',
    },
    heading : {
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 27,
        marginBottom: 20,
    },
});