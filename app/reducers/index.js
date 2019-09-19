import { combineReducers } from 'redux';
import loading from './loading';
import model from './model';
import system from './system';

const rootReducer = combineReducers({
	loading,
	model,
	system
});

export default rootReducer;