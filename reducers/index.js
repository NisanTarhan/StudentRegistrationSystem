import {combineReducers} from 'redux';
import StudentListReducers from './StudentListReducers';
import GradeReducers from './GradeReducers';

export default combineReducers({
    studentListResponse: StudentListReducers,
    gradeListResponse: GradeReducers
});