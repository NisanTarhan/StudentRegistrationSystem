import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const Button = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onClick} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#ee5253',
        width: '80%',
        height: height * 0.07,
        alignItems: 'center',
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 12,
    },
    buttonText: {
        padding: 8,
        fontSize: 16,
        color: '#f5f6fa',
        fontWeight: 'bold'
    }

});