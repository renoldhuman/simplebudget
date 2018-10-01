import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginScreen from './LoginScreen';
import registerServiceWorker from './registerServiceWorker';
import userBalance from "./User";

// function Category (name, amount){
// 	this.name = name;
// 	this.amount = amount;

// 	this.getCategoryName = function(){
// 		return this.name;
// 	}

// 	this.addToAmount = function(amountToAdd){
// 		this.amount += amountToAdd;
// 	}

// 	this.decrementFromAmount = function(amountToDecrement){
// 		this.amount -= amountToDecrement;
// 	}
// }

// class userBalance{
// 	constructor(categories, discretionary){
// 		var alloc = 0;

// 		for (var category in categories){
// 			alloc += category.amount;
// 		}

// 		this.tiedUp = alloc;
// 		this.disc = discretionary;
// 		this.categories = categories;
// 		this.total = this.tiedUp + this.disc;
// 	}

// 	print(){
// 		console.log("Total is " + this.total + " Tied Up is " + this.tiedUp + " Discretionary is " + this.disc);
// 	}

// 	decrementFromDisc(amount){
// 		this.disc -= amount;
// 		this.total -= amount;
// 	}

// 	decrementFromTiedUp(amount){
// 		this.tiedUp -= amount;
// 		this.total -= amount;
// 	}

// 	checkForName(nameToCheck){
// 		var indexOfName = -1;
// 		for (var categoryIndex = this.categories.length - 1; categoryIndex >= 0; categoryIndex--) {
// 			if(this.categories[categoryIndex].getCategoryName() == nameToCheck){
// 				indexOfName = categoryIndex;
// 			}
// 		}
// 		return indexOfName;
// 	}

// 	getCategoryByName(nameToGet){
// 		var categoryIndex = this.checkForName(nameToGet);
// 		if(categoryIndex != -1){
// 			return this.categories[categoryIndex];
// 		}else{
// 			console.log("The given category doesn't exist");
// 		}
// 	}

// 	addCategory(name, amount){
// 		if(this.checkForName(name) == -1){
// 			var category = new Category(name, amount);
// 			this.categories.push(category);
// 		}else{
// 			console.log("A category already exists with the name " + name);
// 		}
		
// 	}

// 	getCategories(){
// 		return this.categories;
// 	}
// }



var cats = [];

var uB = new userBalance("flyboy69",cats, 0);


ReactDOM.render(<LoginScreen/>, document.getElementById('root'));
registerServiceWorker();
