import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import setCountry from '../action/setCountry';
import ComponentAdd from '../components/Add';

class Add extends Component{
	render(){
		return(
			<div>
				<ComponentAdd add = {this.props.addCountry}/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return{
		addCountry : bindActionCreators(setCountry,dispatch)
	}
}

export default connect(null,mapDispatchToProps)(Add);