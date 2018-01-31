import React, { Component } from 'react';
import '../css/search.css';

export default class Search extends Component{
	
	search = (e) => {
		this.props.setSearchValue(e.target.value);
	}

	render(){
		return(
			<div className="search">
				<div>
					<input 
						type="text" 
						placeholder ="Country"
						value = {this.props.searchValue}
						onChange = {this.search}
					/>
				</div>
				<div>
					<button onClick = {this.search}>Search</button>
				</div>
			</div>
		);
	}
}