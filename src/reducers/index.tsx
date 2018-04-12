import { combineReducers } from 'redux';
import dataReducer from './data.reducer';
import formReducer from './form.reducer';

export default combineReducers({
    dataReducer,
    formReducer
});
