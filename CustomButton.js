// CustomButton.js
import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import {View} from "react-native-web";

export default class CustomButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>Button</Text>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: 'black',
        justifyContent: 'center',
        width: '50%',

    },
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 40,
    },
    div: {

    },
});
