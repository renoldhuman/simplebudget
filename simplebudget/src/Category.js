import React, { Component } from 'react';
import "./Category.css"

class Category extends Component{

	render(){
		return(
			<div className="CategoryContainer">
				<div className="CategoryName">
					<h1 className="Name">{this.props.category.name}</h1>
				</div>
				<div className="CategoryAlloc">
					<h1 className="Allocation">{this.props.category.amount}</h1>
				</div>
			</div>
						
		);    
	}
}

export default Category