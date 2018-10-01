import React, { Component } from 'react';


class CategoryForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			categoryName: '',
			categoryAmount: 0
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAmountChange = this.handleAmountChange.bind(this);
		this.handleCancelation = this.handleCancelation.bind(this);
	}

	handleSubmit(){
		var categoryName = this.state.categoryName;
		var categoryAmount = this.state.categoryAmount;

		if(categoryName != ''){
			this.props.handleCategoryCreation(categoryName, categoryAmount);
		}else{
			console.log("The category must have a proper name");
		}
	}

	handleNameChange(event){
		this.setState({categoryName: event.target.value});
	}

	handleAmountChange(event){
		this.setState({categoryAmount: event.target.value});
	}

	handleCancelation(){
		this.props.handleCancelation();
	}

	render(){
		var style = {
			backgroundColor: "white"
		}
		return(
			<div className = "CategoryForm" style = {style}>
				<form onSubmit={this.handleSubmit}>
        			<label>
          				Category Name:
          				<input type="text" value={this.state.categoryName} onChange={this.handleNameChange}/>
        			</label>
        			<label>
        				Category Amount:
        				<input type="text" value={this.state.categoryAmount} onChange={this.handleAmountChange}/>
        			</label>
        			<input type="submit" value="Submit" />
        			<button onClick={this.handleCancelation}>Cancel</button>
     			 </form>
     		</div>
		);
	}
}

export default CategoryForm;