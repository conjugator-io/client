import { combineReducers } from 'redux';
import userReducer from './userReducer';
import verbsReducer from './verbsReducer';

export default combineReducers({
    user: userReducer,
    questions: verbsReducer
});