import React, { Component } from 'react';
import CategoryAllocationRow from './CategoryAllocationRow';
import Category from "./User";
import "./CategoryAllocationBox.css";

class CategoryAllocationBox extends Component{
	constructor(props){
		super(props);

		var nameArray = [];
		for(var cat in this.props.categories){
			var catName = this.props.categories[cat].getCategoryName();
			nameArray.push(catName);
		}

		var allocArray = nameArray.slice(0);
		allocArray.fill(0);

		this.state = {
			newFunds: 0,
			categoryNames: nameArray,
			categoryAllocations: allocArray,
			discAllocation: 0
		}

		this.renderCategoryForm = this.renderCategoryForm.bind(this);
		this.updateCategoryAllocation = this.updateCategoryAllocation.bind(this);
		this.updateNewFunds = this.updateNewFunds.bind(this);
		this.updateDiscAllocation = this.updateDiscAllocation.bind(this);
		this.handleAllocationCancelation = this.handleAllocationCancelation.bind(this);
		this.handleAllocationCompletion = this.handleAllocationCompletion.bind(this);
	}

	updateCategoryAllocation(categoryName, allocation){
		if(categoryName != "Discretionary"){
			var indexOf = this.state.categoryNames.lastIndexOf(categoryName);
			var newCatAlloc = this.state.categoryAllocations;
			newCatAlloc[indexOf] = allocation;

			this.setState({
				categoryAllocations: newCatAlloc
			});
		}else{
			this.updateDiscAllocation(allocation);
		}
		
	}

	updateNewFunds(categoryName, newFundsToAlloc){
		this.setState({
			newFunds: newFundsToAlloc
		});
	}

	updateDiscAllocation(allocation){
		this.setState({
			discAllocation: allocation
		})
	}

	renderCategoryForm(categoryName){
		return(
			<CategoryAllocationRow name={categoryName} handleSubmit={this.updateCategoryAllocation}/>
		);
	}

	handleAllocationCompletion(){
		this.props.allocCompleted(this.state.categoryNames, this.state.categoryAllocations, this.state.discAllocation, this.props.addOrDec);
	}

	handleAllocationCancelation(){
		this.props.allocCancelled();
	}

	render(){
		return(
			<div className="CategoryAllocationBox">
				{this.props.addOrDec ? <CategoryAllocationRow name="How Much Are You Adding?" handleSubmit={this.updateNewFunds}/> : 
				<CategoryAllocationRow name="How Much Are You Spending?" handleSubmit={this.updateNewFunds}/>}
				{this.state.categoryNames.map(this.renderCategoryForm)}
				<CategoryAllocationRow name="Discretionary" handleSubmit={this.updateCategoryAllocation}/>
				<div className="AllocationControlButtons">
					<button className="AllocationControlButtons" id="finishAllocate" onClick={this.handleAllocationCompletion}>
						Finish
					</button>
					<button className="AllocationControlButtons" id="cancelAllocate" onClick={this.handleAllocationCancelation}>
						Cancel
					</button>
				</div>
			</div>
		);
	}
}

export default CategoryAllocationBox