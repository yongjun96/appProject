import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dimensions} from "react-native";
import {Button} from "react-native-web";
import CustomButton from './CustomButton';
import 'react-native-gesture-handler';
import * as React from 'react';






export default function App() {



    return (
        <View style={st.container}>
        <View style={st.case1}>
            <Text style={st.whiteFont}>title</Text>

        </View>

        <View style={{flex: 3, flexDirection: 'row'}}>
        </View>



        <View style={{flex: 1, flexDirection: 'row'}}>
            <CustomButton>
            </CustomButton>

            <CustomButton>
            </CustomButton>

            <CustomButton>
            </CustomButton>
        </View>
        </View>



    );
}

const st = StyleSheet.create({
    container: {
        flex: 1,
    },
    case1: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    case2: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    case3: {
        flex: 3,
        backgroundColor: '#4cb0c2',
        alignItems: 'center',

    },
    whiteFont: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: '12%',
    },
    whiteFont2: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: '50%',
    },
    buttonContainer: {
        margin: 20
    },
});
