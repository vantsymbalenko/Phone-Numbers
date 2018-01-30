import {combineReducers} from 'redux';
import country from './country';
import searchValue from './searchValue';

export default combineReducers({
	country,
	searchValue
});