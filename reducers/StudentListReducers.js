import { 
    GET_STUDENT_LIST, 
    ADD_STUDENT_LIST, 
    // DELETE_STUDENT_LIST, 
    // UPDATE_STUDENT_LIST 
} from '../actions/types';

const INITIAL_STATE = {
    items: [],
    isCreated: false,
    // isDeleted: false,
    // isUpdated: false,
};

export default (state = INITIAL_STATE, action) => {
    isCreated = false;
    switch(action.type){
        case GET_STUDENT_LIST:
            return {...state, items: action.payload};
        case ADD_STUDENT_LIST:
            return {...state, items: [...state.items, action.payload], isCreated: true};
        default:
            return state;
    }
};