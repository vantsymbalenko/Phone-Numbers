import countryNames from '../json/country.json';

var initialState = {
						country: countryNames,
						errors : ''
					};

export default function country(state = initialState,action){
	
	switch (action.type) {
	 	case "ADD_COUNTRY":{
	 		let newState = {...state};
	 		newState.country.push({name: action.name, phone: action.phone});
	 		newState.errors = '';
	 		return newState
	 	}
	 	case "SET_ERRORS" : 
	 		let newState = {...state};
	 		newState.errors = action;
	 		return newState;
	 	default:
			return state;
	 } 
}