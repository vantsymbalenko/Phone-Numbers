import React, { Component } from 'react';
import {connect} from 'react-redux';
import ComponentSearch from '../components/Search.js';
import setSearchValue from '../action/setSearchValue.js';

class Search extends Component{
	render(){
		return(
			<ComponentSearch 
				searchValue = {this.props.searchValue} 
				setSearchValue = {this.props.setSearchValue}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchValue: state.searchValue
	}
}

const mapDispatchToProps ={
		setSearchValue : setSearchValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);