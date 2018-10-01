import React, { Component } from 'react';
import BalanceContainer from "./BalanceContainer";
import CategoryContainer from "./CategoryContainer";
import MoneyContainer from "./MoneyContainer";
import CategoryForm from "./NewCategoryForm";
import CategoryAllocationBox from "./CategoryAllocationBox";
import userBalance from "./User";
import Category from "./User";
import BackgroundFade from "./fade";

class BudgetContainer extends Component{
	constructor(props){
		super(props);

		var userBalance = this.props.userBalance;

		this.state = {
			userBalance: userBalance,
			userName: userBalance.userName,
			categories: userBalance.categories,
			total: userBalance.total,
			tiedUp: userBalance.tiedUp,
			disc: userBalance.disc,
			showAddNewCategoryPopUp: false,
			showAllocatePopUp:false,
			addOrDec: false
		}

		this.addNewCategory = this.addNewCategory.bind(this);
		this.toggleAddNewCategoryPopUp = this.toggleAddNewCategoryPopUp.bind(this);
		this.toggleAllocatePopUpSetAdd = this.toggleAllocatePopUpSetAdd.bind(this);
		this.toggleAllocatePopUpSetDec = this.toggleAllocatePopUpSetDec.bind(this);
		this.updateCategoryAllocations = this.updateCategoryAllocations.bind(this);
		this.createNewUserBalanceByAdding = this.createNewUserBalanceByAdding.bind(this);
		this.createNewUserBalanceByDecrementing = this.createNewUserBalanceByDecrementing.bind(this);
		// this.hideAddNewCategoryPopUp = this.hideAddNewCategoryPopUp.bind(this);
	}

	componentDidMount(){
		// const that = this;
		// fetch('/users')
		// 	.then(function(response){
		// 		response.json().then(function(data){
		// 		var newCategories = [];
		// 		var newUser = new userBalance(that.state.userName, newCategories, data.discretionary);
		// 		for (var i = 0; i < data.categories.length; i++)
		// 		{
		// 			newUser.addCategory(data.categories[i].categoryName, data.categories[i].allocation);
		// 		}
		// 		that.setState(prevState => ({
		// 			userBalance: newUser,
		// 			categories: newUser.categories,
		// 			total: newUser.total,
		// 			tiedUp: newUser.tiedUp,
		// 			disc: newUser.disc
		// 		}));
		// 	});
		// })
	}

	addNewCategory(categoryName, categoryAmount){
		const that = this;
		var newUser = this.state.userBalance;
		if(newUser.addCategory(categoryName,categoryAmount))
		{
			this.setState(prevState => ({
				userBalance: newUser,
				categories: newUser.categories,
				total: newUser.total,
				tiedUp: newUser.tiedUp,
				disc: newUser.disc,
				showAddNewCategoryPopUp: false
			}));
			fetch('/newCategory',
			{
				method: 'POST',
				body: JSON.stringify({userName: that.state.userName, catName: categoryName, catAlloc: categoryAmount}),//this.state.userName, categoryName, categoryAmount
				headers: {"Content-Type": "application/json"}
			});
		}
	}

	toggleAddNewCategoryPopUp(){
		this.setState(prevState => ({
			showAddNewCategoryPopUp: !prevState.showAddNewCategoryPopUp
		}));
	}

	// hideAddNewCategoryPopUp(){
	// 	this.setState(prevState => ({
	// 		showAddNewCategoryPopUp: false
	// 	}));
	// }



	toggleAllocatePopUpSetAdd(){
		this.setState(prevState => ({
			showAllocatePopUp: !prevState.showAllocatePopUp,
			addOrDec: true
		}));
	}

	toggleAllocatePopUpSetDec(){
		this.setState(prevState => ({
			showAllocatePopUp: !prevState.showAllocatePopUp,
			addOrDec: false
		}));
	}

	createNewUserBalanceByAdding(categoryNames, categoryAllocations, discAllocation){
		const that = this;
		var categories = [];

		for(var categoryNameIndex = 0; categoryNameIndex < categoryNames.length; categoryNameIndex++){
			var catAlloc = categoryAllocations[categoryNameIndex] * 1;
			var category = this.state.userBalance.getCategoryByName(categoryNames[categoryNameIndex]);
			
			if(catAlloc > 0){
				category.addToAmount(catAlloc);
				fetch('/updateCategory',
				{
					method: 'POST',
					body: JSON.stringify({userName: that.state.userName, catName: category.name, newCatAlloc: category.amount}),//this.state.userName, categoryName, categoryAmount
					headers: {"Content-Type": "application/json"}
				});
			}

			categories.push(category);
		}

		//having string addition errors somewhat i think 
		var newDisc = (this.state.disc * 1) + (discAllocation * 1);
		console.log(newDisc);
		var newUserBalance = new userBalance(this.state.userName, categories, newDisc);
		console.log(""+newUserBalance.disc);

		return newUserBalance;
	}

	createNewUserBalanceByDecrementing(categoryNames, categoryAllocations, discAllocation){
		const that = this;
		var categories = [];
		for(var categoryNameIndex = 0; categoryNameIndex < categoryNames.length; categoryNameIndex++){
			var catAlloc = categoryAllocations[categoryNameIndex] * 1;
			var category = this.state.userBalance.getCategoryByName(categoryNames[categoryNameIndex]);

			if(catAlloc > 0){
				category.decrementFromAmount(catAlloc);
				fetch('/updateCategory',
				{
					method: 'POST',
					body: JSON.stringify({userName: that.state.userName, catName: category.name, newCatAlloc: category.amount}),//this.state.userName, categoryName, categoryAmount
					headers: {"Content-Type": "application/json"}
				});
			}

			categories.push(category);
		}

		//having string addition errors somewhat i think 
		var newDisc = (this.state.disc * 1) - (discAllocation * 1);
		console.log(newDisc);
		var newUserBalance = new userBalance(this.state.userName,categories, newDisc);
		console.log(""+newUserBalance.disc);

		return newUserBalance;
	}

	updateCategoryAllocations(categoryNames, categoryAllocations, discAllocation, addOrDec){
		
		var newUserBalance = null;
		if(addOrDec){
			newUserBalance = this.createNewUserBalanceByAdding(categoryNames, categoryAllocations, discAllocation);
		}else{
			newUserBalance = this.createNewUserBalanceByDecrementing(categoryNames, categoryAllocations, discAllocation);
		}

		//The fetch request to update the mongo db occurs in the user itself
		

		this.setState(prevState => ({
			userBalance: newUserBalance,
			categories: newUserBalance.categories,
			total: newUserBalance.total,
			tiedUp: newUserBalance.tiedUp,
			disc: newUserBalance.disc,
			showAllocatePopUp:false
		}))
	}

	render(){
		return(
			<div className="BudgetContainer">
				<BalanceContainer userBalance={this.state.userBalance}/>
				<MoneyContainer handleAddClick={this.toggleAllocatePopUpSetAdd} handleDecClick={this.toggleAllocatePopUpSetDec}/>
				{this.state.showAddNewCategoryPopUp ? <CategoryForm handleCategoryCreation={this.addNewCategory} handleCancelation={this.toggleAddNewCategoryPopUp}/> : null}
				{this.state.showAllocatePopUp ? <CategoryAllocationBox allocCompleted={this.updateCategoryAllocations} allocCancelled={this.toggleAllocatePopUpSetAdd} categories={this.state.categories} addOrDec={this.state.addOrDec}/> : null}
				{this.state.showAllocatePopUp ? <BackgroundFade/> : null}
				<CategoryContainer showPopUp={this.toggleAddNewCategoryPopUp} categories={this.state.categories}/>
			</div>
		);
	}
}

export default BudgetContainer;