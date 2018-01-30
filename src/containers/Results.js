import React, { Component } from 'react';
import {connect} from 'react-redux';
import ComponentResult from '../components/Results';

class Results extends Component{
	
	render(){
		console.log(this.props);
		return(
			<ComponentResult country = {this.props.country}/>
		);
	}
}

function mapStateToProps(state){
	console.log(state.country);
	return {
		country: state.country
	}
}
export default connect(mapStateToProps, null)(Results);