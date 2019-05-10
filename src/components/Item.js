import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');

const Item = (props) => {
    return (
        <View style={styles.itemView}>
             {/* <TouchableOpacity activeOpacity={0.6} style={{ flex: 9 }} onPress={() => Actions.addTodo({ item: this.props.data, index: this.props.indexOfItem, update: true })}> */}
            <TouchableOpacity activeOpacity={0.6} style={{ height:80, width: 150}} onPress={() => Actions.addStudent()}>
                <View style={styles.itemTextView}>
                    <Text style={styles.itemText}>{props.data.name}</Text>
                    <Text style={styles.itemText}>{props.data.surname}</Text>
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => this.props.delete(this.props.indexOfItem)} style={styles.deleteItem}>
                <Icon name="trash" size={30} style={{ color: '#5f27cd' }} />
            </TouchableOpacity> */}

        </View>
    );
}

export default Item;

const styles = StyleSheet.create({
    itemView: {
        margin: 10,
        padding: 4,
        height: 60,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderColor: '#5f27cd',
        borderWidth: 1,
        flexDirection: 'row',
        // shadowColor: "#000",
        // shadowOffset: { width: 10, height: 10 },
        // shadowOpacity: 1,
        // shadowRadius: 16.00,
        // elevation: 12,
    },
    itemTextView: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    itemText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 4
    },
    // itemDescriptionText: {
    //     marginRight: 13,
    //     color: 'black',
    //     fontSize: 12
    // },
    // deleteItem: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }
});
