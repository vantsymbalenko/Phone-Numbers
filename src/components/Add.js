import React, { Component} from 'react';
import '../css/add.css';

export default class Add extends Component{
	
	setCountry = (e) => {
		e.preventDefault();
		this.props.setCountry(this.countryName.value, this.countryPhone.value);
	}
	
	render(){
		return(
			<div className="add-area">
				<div>
					<input 
						className = {this.props.errors.name ? 'errors' : ''}
						type="text"
						placeholder="Country Name" 
						defaultValue = {this.props.errors.name ? this.countryName : ''}
						ref ={(name) => {
							this.countryName = name;
						}}
					/>
					<div>{this.props.errors.name}</div>
				</div>
				<div>
					<input 
						className = {this.props.errors.phone ? 'errors' : ''}
						type="text"
						placeholder="Country Phone" 
						defaultValue = {this.props.errors.phone ? this.countryPhone : ''}
						ref={(phone) => {
							this.countryPhone = phone;
						}}
					/>
					<div>{this.props.errors.phone}</div>
				</div>
				<div>
					<button onClick = {this.setCountry}>Add</button>
				</div>
			</div>
		);
	}
}