import React, { Component } from 'react';
import {connect} from 'react-redux';
import setCountry from '../action/setCountry';
import ComponentAdd from '../components/Add';

class Add extends Component{
	render(){
		return(
				<ComponentAdd setCountry = {this.props.setCountry} errors = {this.props.errors}/>
		);
	}
}

const mapStateToProps = (state) => ({
	errors : state.country.errors
});

const mapDispatchToProps ={
	setCountry: setCountry
}

export default connect(mapStateToProps,mapDispatchToProps)(Add);