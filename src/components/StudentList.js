import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Item } from './index';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import {getStudentList} from '../../actions'

class StudentList extends Component {

  constructor(props) {
    super(props);
  }
  
  state = {
    name: '',
    surname: '',
    department: '',
    parentName: '',
    parentTel: '',
    items: []
  }

  componentDidMount = () => {
    this.props.getStudentList();
  };

  // async componentWillReceiveProps(props) {
  //   if (props.isDeleted) {
  //     try {
  //       await AsyncStorage.setItem('@studentList', JSON.stringify(props.items));
  //     } catch (error) {
  //       console.warn(error)
  //     }
  //   }
  // }

  // // Delete All TodoList's Items
  // deleteAllItem = () => {
  //   Alert.alert(
  //     'Warning',
  //     'Do you really want to delete all todos?',
  //     [
  //       {
  //         text: 'OK', onPress: () => {
  //           this.props.deleteAllTodoList([])
  //           // this.setState({ title: '', description: ''});
  //         }
  //       },
  //       { text: 'Cancel', style: 'cancel' }
  //     ],
  //     { cancelable: false }
  //   );
  // }

  // // //Delete Todo
  // deleteItem = async (index) => {
  //   this.props.deleteTodoList(index);
  // }

  renderItem = ({ item, index }) => {
    return (
      <Item data={item} indexOfItem={index} />);
    // <Item data={item} indexOfItem={index} delete={this.deleteItem} />);
  }

  render() {
    return (
      <LinearGradient colors={['#FF512F', '#DD2476']} style={styles.linearGradient}>
        <View stlye={styles.container}>
          <FlatList
            data={this.props.items}
            keyExtractor={(item, index) => item.description + index.toString()}
            renderItem={this.renderItem}
          />
        </View>
        {/* <View style={styles.deleteAllView}>
          <MyButton onClick={this.deleteAllItem} text={'DELETE ALL'}></MyButton>
        </View> */}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
  }
});

const mapStateToProps = ({studenListResponse}) => {
  return { items: studenListResponse.items, isCreated: studenListResponse.isCreated}
};

export default connect(mapStateToProps,{getStudentList})(StudentList);