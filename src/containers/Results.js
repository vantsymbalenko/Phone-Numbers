import React, { Component } from 'react';
import {connect} from 'react-redux';
import ComponentResult from '../components/Results';

class Results extends Component{
	render(){
		return(
			<ComponentResult country = {this.props.country}/>
		);
	}
}

const mapStateToProps = state => {
	var result = [];
	state.country.country.forEach((item, index) => {
		if(item.name.includes(state.searchValue)){
			result.push(item);
		}
	});
	return {
		country : result
	}
};

export default connect(mapStateToProps, null)(Results);