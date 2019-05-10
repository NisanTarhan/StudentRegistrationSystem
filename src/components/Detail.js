import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from './index';
import { Actions } from 'react-native-router-flux';
// import { connect } from 'react-redux';
// import { getStudentList } from '../../actions'

const { height, width } = Dimensions.get('window');

const Detail = (props) => {
    return (
        <LinearGradient colors={['#FF512F', '#DD2476']}>
            <View style={styles.detailContainer}>
                <Text style={styles.text}>Name: {props.item.name}</Text>
                <Text style={styles.text}>Surname: {props.item.surname}</Text>
                <Text style={styles.text}>Department: {props.item.department}</Text>
                <Text style={styles.text}>ParentName: {props.item.parentName}</Text>
                <Text style={styles.text}>ParentTel: {props.item.parentTel}</Text>
                <View style={styles.buttonView}>
                    {/* <Button onClick={() => Actions.grade()}>ENTER GRADES</Button> */}
                    <Button onClick={() => Actions.grade({item: props.item, index: props.index})}>ENTER GRADES</Button>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Detail;

const styles = StyleSheet.create({
    detailContainer: {
        height: height,
        width: width,
        alignItems: 'center',
        marginTop: 80,
    },
    text: {
        width: width * 0.7,
        fontSize: 20,
        margin: 10,
        color: 'white'
    },
    buttonView: {
        height: height * 0.4,
        width:  width * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30
    }
});