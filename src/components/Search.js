import React, { Component } from 'react';

export default class Search extends Component{
	constructor(props){
		super(props);
		this.search = this.search.bind(this);
	}
	search(e){
		e.preventDefault();
		this.props.setSearchValue(this.inputValue.value);
	}
	render(){
		// console.log(this.props.searchValue);
		return(
			<div>
				<label>
					<span> search name</span>
					<input type="text" 
					ref={(input) => {
						this.inputValue = input;
					}}/>
				</label>
				<button onClick = {this.search}>search</button>
				<div>{this.props.searchValue.phone}</div>
			</div>
		);
	}
}