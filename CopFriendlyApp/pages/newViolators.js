import { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';
import jsonData from '../violators.json';
import { GET_VIOLATORS } from './urls'
import axios from 'axios';

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default NewViolators = ({ navigation }) => {


    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(jsonData);
    const [expandedItem, setExpandedItem] = useState(null);
    const [mainData, setMainData] = useState([]);



    useEffect(async () => {
        const fetch = async () => {
            const { data } = await axios.get(GET_VIOLATORS)
            console.log(data);
            setMainData(data);
        }
        await fetch();
}, [])

    const handleSearch = (event) => {
        const query = event.nativeEvent.text;
        setSearchQuery(query);
        const filtered = jsonData.filter(item =>
            item.violatorName.toLowerCase().includes(query.toLowerCase())
        );

        const filtered2 = jsonData.filter(item =>
            item.drivingLicense.toLowerCase().includes(query.toLowerCase())
        );

        const res = [...new Set([...filtered, ...filtered2])];
        setFilteredData(res)
    };

    const moreDetails = (drivingLicense) => {
        console.log('Navigating to More Details');
        navigation.navigate('moreDetails', { number : drivingLicense });
    };

    const issueTicket = (drivingLicense) => {
        console.log('Navigating to Issue Ticket');
        navigation.navigate('Ticket', { number : drivingLicense });
    }

    const renderItem = ({ item, index }) => {
        const isExpanded = index === expandedItem;
        return (
            <TouchableOpacity onPress={() => toggleExpand(index)}>
                <View style={styles.item}>
                    <Text>Violators Name : {item.violatorName}</Text>
                    <Text>Driving License : {item.drivingLicense}</Text>
                    <Text>Mobile number : {item.mobileNumber}</Text>
                    {isExpanded && (
                        <View style={styles.expand}>
                            <Text style={styles.innerText}
                            onPress={() => moreDetails(item.drivingLicense)}>
                                More Details
                            </Text>
                            <Text style={styles.innerText}
                            onPress={() => issueTicket(item.drivingLicense)}>
                                issue a ticket
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    const toggleExpand = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedItem(index === expandedItem ? null : index);
    };

    const changePage = () => {
        console.log('Navigating to RegisterViolator');

        navigation.navigate('RegisterViolator');
    };

    const changeEmergency = () => {
        console.log('Navigating to Emergency');
        navigation.navigate('Emergency');
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Search Name"
                value={searchQuery}
                onChange={handleSearch}
            />
            {filteredData.length === 0 ? (<Text style={styles.noData}>No Data Found</Text>) :
            ( <FlatList
                data={filteredData}
                style={styles.container}
                renderItem={renderItem}
                keyExtractor={item => item.drivingLicense.toString()}
            />)}
            <View style={styles.bottom}>
                <Text 
                    style={styles.text}
                    onPress={changePage}>
                    Add New Violator
                </Text>
                <Text style={styles.text1}
                    onPress={changeEmergency}>
                    Add an Emergency
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    text: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    text1: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    container: {
        height: '83%',
        minHeight: '83%',
    },
    input: {
        width: '90%',
        height: '5%',
        borderColor: 'gray',
        minHeight: 40,
        borderWidth: 1,
        paddingHorizontal: 8,
        margin: 10,
        marginLeft: 20,
        borderRadius: 15,
    },
    noData: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        height: '80%',
        fontWeight: 'bold',
    },
    expand: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    innerText: {
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        textAlign: 'center',
        width: '45%',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'lightblue',
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});