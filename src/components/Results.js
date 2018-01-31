import React from 'react';
import '../css/result.css';

export default function Results(props){
	return (
		<div className="results">
			<div className="wrapper">
				<div>Country</div>
				<div>Phone</div>
			</div>
			{props.country.map((item, index) => {
				return(
					<div className="wrapper" key={index}>
						<div>{item.name}</div>
						<div>{item.phone}</div>
					</div>
				);
			})}
		</div>
	)
}