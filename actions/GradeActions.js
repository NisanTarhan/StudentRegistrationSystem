import AsyncStorage from '@react-native-community/async-storage';
import {GET_GRADE_LIST, UPDATE_GRADE_LIST, ADD_GRADE_LIST} from './types';

export const getGradeList = () => {
    return (dispatch) => {
        AsyncStorage.getItem('@gradeList', (err, result) => {
            if(result !== null){
                const gradeList = JSON.parse(result);
                dispatch({
                    type: GET_GRADE_LIST,
                    payload: gradeList
                });
            }
        });
    };
};

export const addGradeList = (params) => {
    return (dispatch) => {
        dispatch({
            type: ADD_GRADE_LIST,
            payload: params
        });
    };
};