import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Dimensions, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, InputAreaView } from './index';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';
import { addGradeList } from '../../actions'
import { connect } from 'react-redux'

const { height, width } = Dimensions.get('window');

class Grade extends Component {

    state = {
        math: '',
        physics: '',
        chemistry: '',
        biology: '',
        english: '',
        grades: []
    }

    async componentWillReceiveProps(props) {
        if (props.isGradeCreated || props.isUpdated) {
          try {
            await AsyncStorage.setItem('@gradeList', JSON.stringify(props.grades));
          } catch (error) {
            console.warn(error)
          }
        }
      }

    addGrade = async () => {
        // if (this.state.name !== '' && Array.isArray(this.props.items)) {
        grade = {
            math: this.state.math,
            physics: this.state.physics,
            chemistry: this.state.chemistry,
            biology: this.state.biology,
            english: this.state.english,
            index: this.props.index
        }
        console.log("EKLENECEK NOT: " +grade)
        // if (this.props.update) {
        //   this.setState({
        //     title: this.props.item.title,
        //     description: this.props.item.description
        //   })
        //   this.props.updateTodoList(toDo)
        // } else {
        //   this.props.addTodoList(student)
        // }
        this.props.addGradeList(grade);
        this.setState({ math: '', physics: '', chemistry: '', biology: '', english: '' });
        // Alert.alert('Grades are added', [{ text: 'OK' }])
        // } else {
        //   Alert.alert('Warning', 'You must fill in the blanks.', [{ text: 'OK' }])
        // }
    }

    render() {
        let { math, physics, chemistry, biology, english } = this.state;
        return (
            <LinearGradient colors={['#FF512F', '#DD2476']}>
                <SafeAreaView style={styles.container}>
                    <InputAreaView value={math} onChangeText={(math) => this.setState({ math })} maxLength={30} placeholder=''>Math</InputAreaView>
                    <InputAreaView value={physics} onChangeText={(physics) => this.setState({ physics })} maxLength={30} placeholder=''>Physics</InputAreaView>
                    <InputAreaView value={chemistry} onChangeText={(chemistry) => this.setState({ chemistry })} maxLength={30} placeholder=''>Chemistry</InputAreaView>
                    <InputAreaView value={biology} onChangeText={(biology) => this.setState({ biology })} maxLength={30} placeholder=''>Biology</InputAreaView>
                    <InputAreaView value={english} onChangeText={(english) => this.setState({ english })} maxLength={30} placeholder=''>English</InputAreaView>
                    <View style={styles.addButtonView}>
                        <Button onClick={this.addGrade}>SAVE</Button>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
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

const mapStateToProps = ({ gradeListResponse }) => {
    console.log('globalden Gelen liste objesi GradeList : ', gradeListResponse);
    return { grades: gradeListResponse.grades, isGradeCreated: gradeListResponse.isGradeCreated  }
};

export default connect(mapStateToProps, { addGradeList })(Grade);

