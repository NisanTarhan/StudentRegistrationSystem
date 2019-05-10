import AsyncStorage from '@react-native-community/async-storage';
import {
    GET_STUDENT_LIST,
    ADD_STUDENT_LIST,
    DELETE_STUDENT_LIST,
    UPDATE_STUDENT_LIST
} from './types'

export const getStudentList = () => {
    return (dispatch) => {
        AsyncStorage.getItem('@studentList', (err,result) => {
            if(result !== null){
                const studentList = JSON.parse(result);
                console.log('gelene data: ', studentList)
                dispatch({
                    type: GET_STUDENT_LIST,
                    payload: studentList
                });
            }
        });
    };
};


export const addStudentList = (params) => {
    return (dispatch) => {
        dispatch({
            type: ADD_STUDENT_LIST,
            payload: params
        });
    };
};
