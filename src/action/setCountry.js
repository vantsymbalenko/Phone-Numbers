var namePattern = /^[a-zа-яё-]{4,}$/i,
	phonePattern = /^\+[0-9]+$/;

export default function setCountry(name, phone){
	if(!namePattern.test(name)){
		return {
			type: "SET_ERRORS",
			name: "Invalid country name"
		}
	}
	else if(!phonePattern.test(phone)){
		return {
			type: "SET_ERRORS",
			phone: "Invalid country phone. Must be: +XXXX"
		}
	}
	else return {
		type 	: "ADD_COUNTRY",
		name 	: name,
		phone 	: phone
	}
}