import React from 'react';

export default function Results(props){
	return (
		<div>
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