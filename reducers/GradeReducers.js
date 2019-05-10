import {
    GET_GRADE_LIST, 
    ADD_GRADE_LIST, 
    UPDATE_GRADE_LIST
} from '../actions/types'

const INITIAL_STATE = {
    grades : [],
    isGradeCreated: false
}

export default (state = INITIAL_STATE, action) => {
    isGradeCreated: false;
    switch (action.type) {
        case GET_GRADE_LIST:
            return {...state, grades: action.payload};
        case ADD_GRADE_LIST:
            return {...state, grades: [...state.grades, action.payload], isGradeCreated: true};
        default:
            return state;
    }
}