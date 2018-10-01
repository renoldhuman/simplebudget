import React, { Component } from 'react';
import Category from "./Category";
import "./CategoriesContainer.css"

class CategoryContainer extends Component{
	constructor(props){
		super(props);

		this.mapCategory = this.mapCategory.bind(this);
		this.showNewCategoryPopUp = this.showNewCategoryPopUp.bind(this);
	}

	mapCategory(category){
		return(
			<Category category={category} key={category.name} />
		);
	}

	showNewCategoryPopUp(){
		this.props.showPopUp();
	}

	render(){

		return(
			<div className="CategoriesContainer">
				{this.props.categories.map(this.mapCategory)}
				<button onClick = {this.showNewCategoryPopUp}>Press Me!</button>
			</div>
			
		);
	}
}

export default CategoryContainer