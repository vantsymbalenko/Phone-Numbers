var initialState = [
					{name: "UK", phone: '+44'},
					{name: "USA", phone: '+1'},
					{name: "Ukraine", phone: '+380'}
				];
export default function country(state = initialState,action){
	console.log(state);
	switch (action.type) {
	 	case "ADD_COUNTRY":{
	 		let newState = [...state];
	 		newState.push({name: action.name, phone: action.phone});
	 		return newState
	 	}
	 	default:
			return state;
	 } 
}