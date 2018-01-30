export default function setCountry(name, phone){
	return {
		type 	: "ADD_COUNTRY",
		name 	: name,
		phone 	: phone
	}
}