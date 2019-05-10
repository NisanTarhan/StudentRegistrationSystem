import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const InputAreaView = (props) => {
    return (
        <View style={styles.inputView}>
            <Text style={styles.text}>{props.children}</Text>
            <TextInput value={props.value} onChangeText={props.onChangeText} maxLength={props.maxLength} placeholder={props.placeholder} style={styles.textInput}></TextInput>
        </View>
    );
}

export default InputAreaView;

const styles = StyleSheet.create({
    inputView: {
      paddingTop: 5,
      height: height*0.14,
      marginLeft: 15,
      marginRight: 15,
      justifyContent: 'center'
    },
    text: {
      fontSize: 17,
      fontWeight: '500',
      color: 'white',
    },
    textInput: {
      backgroundColor: '#ffffff',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 5,
      paddingRight: 7,
      height: 40,
      width: width*0.9
    }
  });