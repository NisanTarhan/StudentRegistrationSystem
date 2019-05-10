import {combineReducers} from 'redux';
import StudentListReducers from './StudentListReducers';

export default combineReducers({
    studentListResponse: StudentListReducers
});