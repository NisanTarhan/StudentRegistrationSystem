/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {StudentList, AddStudent, Detail, Grade} from './src/components'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from './reducers';

export default class App extends Component{
  
  renderRight(){
    return(
      <Text style={{marginRight: 20, fontSize: 20}}onPress={() => Actions.addStudent()}>Add</Text>
    )
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk,logger));
    return (
      <Provider store={store}>
        <Router 
          navigationBarStyle={styles.navBar}
          titleStyle={styles.titleStyle}>
          <Stack key="root">
            <Scene 
             key='studentList'
             component={StudentList}
             title="Student List"
             renderRightButton={this.renderRight}
             initial>
            </Scene>

            <Scene 
              key='addStudent'
              component={AddStudent}
              title='Add Student'
              >
            </Scene>

            <Scene 
              key='detail'
              component={Detail}
              title="Detail">
            </Scene>

            <Scene 
              key='grade'
              component={Grade}
              title="Grade">
            </Scene>
          </Stack>
        </Router>
      </Provider>    
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ff5252',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 16.00,
    elevation: 30,
  },
  titleStyle: {
    color: 'white'
  }
});
