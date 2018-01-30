import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ComponentSearch from '../components/Search.js';
import setSearchValue from '../action/setSearchValue.js';


class Search extends Component{
	render(){
		// console.log(this.props.searchValue);
		return(
			<ComponentSearch searchValue = {this.props.searchValue} setSearchValue = {this.props.setSearchValue}/>
		);
	}
}

// function mapStateToProps(state){
// 	let searchValue = '';
// 	for(let i = 0; i < state.country.length; i++){
// 		if(state.country[i].name === state.searchValue){
// 			searchValue = state.country[i];
// 		}
// 	}
// 	return {
// 		searchValue: searchValue
// 	}
// }

const mapStateToProps = state => {
	let searchValue = '';
 	for(let i = 0; i < state.country.length; i++){
		if(state.country[i].name === state.searchValue){
			searchValue = state.country[i];
		}
	}
	return {
		searchValue: searchValue
	}
}

// function mapDispatchToProps(dispatch){
// 	return {
// 		setSearchValue : bindActionCreators(setSearchValue, dispatch)
// 	}
// }

const mapDispatchToProps ={
		setSearchValue : setSearchValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);