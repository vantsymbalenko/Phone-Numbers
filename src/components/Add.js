import React, { Component} from 'react';

export default class Add extends Component{
	constructor(props){
		super(props);
		this.add = this.add.bind(this);
	}
	add(e){
		e.preventDefault();
		this.props.add(this.countryName.value, this.countryPhone.value);
	}
	render(){
		return(
			<div className="add">
				<label>
					<span>Enter Country Name</span>
					<input type="text" ref ={(name) => {
						this.countryName = name;
					}}/>
				</label>
				<label>
					<span>Enter Country Phone</span>
					<input type="text" ref={(phone) => {
						this.countryPhone = phone;
					}}/>
				</label>
				<button onClick = {this.add}>Add</button>
			</div>
		);
	}
}