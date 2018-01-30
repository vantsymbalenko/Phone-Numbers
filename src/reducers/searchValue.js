export default function searchValue(state='',action){
	console.log(state);
	switch (action.type) {
		case "SET_SEARCH_VALUE":
			return action.value;
		default:
			return state;
	}
}