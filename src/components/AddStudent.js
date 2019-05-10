import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, Text, Alert } from 'react-native'
import { Button, InputAreaView } from './index';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { addStudentList } from '../../actions'

const { height, width } = Dimensions.get('window');

class AddStudent extends Component {
  
  state = {
    name: '',
    surname: '',
    department: '',
    parentName: '',
    parentTel: '',
    items: []
  }

  componentWillMount() {
    // if (this.props.update) {
    //   this.setState({
    //     title: this.props.item.title,
    //     description: this.props.item.description
    //   })
    // }
  };

  async componentWillReceiveProps(props) {
    if (props.isCreated || props.isUpdated) {
      try {
        await AsyncStorage.setItem('@studentList', JSON.stringify(props.items));
        Actions.pop()
      } catch (error) {
        console.warn(error)
      }
    }
  }


  addItem = async () => {
    // if (this.state.name !== '' && Array.isArray(this.props.items)) {
      student = {
        name: this.state.name,
        surname: this.state.surname,
        department: this.state.department,
        parentName: this.state.parentName,
        parentTel: this.state.parentTel,
        index: this.props.index
      }
      // if (this.props.update) {
      //   this.setState({
      //     title: this.props.item.title,
      //     description: this.props.item.description
      //   })
      //   this.props.updateTodoList(toDo)
      // } else {
      //   this.props.addTodoList(student)
      // }
      this.props.addStudentList(student);
      this.setState({ name: '', surname: '', department: '', parentName: '', parentTel: '' });
    // } else {
    //   Alert.alert('Warning', 'You must fill in the blanks.', [{ text: 'OK' }])
    // }
  }

  render() {
    let { name, surname, department, parentName, parentTel } = this.state;
    return (
      <LinearGradient colors={['#FF512F', '#DD2476']}>
        <SafeAreaView style={styles.container}>
          <InputAreaView value={name} onChangeText={(name) => this.setState({ name })} maxLength={30} placeholder='Student Name'>Name</InputAreaView>
          <InputAreaView value={surname} onChangeText={(surname) => this.setState({ surname })} maxLength={30} placeholder='Student Surname'>Surname</InputAreaView>
          <InputAreaView value={department} onChangeText={(department) => this.setState({ department })} maxLength={30} placeholder='Department'>Department</InputAreaView>
          <InputAreaView value={parentName} onChangeText={(parentName) => this.setState({ parentName })} maxLength={30} placeholder='Parent Name'>Parent Name</InputAreaView>
          <InputAreaView value={parentTel} onChangeText={(parentTel) => this.setState({ parentTel })} maxLength={30} placeholder='Parent Tel'>Parent Tel</InputAreaView>
          <View style={styles.addButtonView}>
            <Button onClick={this.addItem}>ADD</Button>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  // linearGradient: {
  //   flex: 1,
  // },
  container: {
    height: height,
    width: width,
  },
  addButtonView: {
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30
  }
});

const mapStateToProps = ({ studentListResponse }) => {
  console.log('globalden Gelen liste objesi StudentListesi : ', studentListResponse);
  return { items: studentListResponse.items, isCreated: studentListResponse.isCreated }
};

export default connect(mapStateToProps, { addStudentList })(AddStudent);
