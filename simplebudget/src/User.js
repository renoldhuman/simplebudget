function Category (name, amount){
	this.name = name;
	this.amount = amount;

	this.recentlyUpdated = false;

	this.getUpperCaseCategoryName = function(){
		return this.name.toUpperCase();
	}

	this.getCategoryName = function(){
		return this.name;
	}

	this.getCategoryAmount = function(){
		return this.amount * 1;
	}

	this.addToAmount = function(amountToAdd){
		this.amount = (this.amount * 1) + (amountToAdd * 1);
		// toggleUpdatedFlag();
	}

	this.decrementFromAmount = function(amountToDecrement){
		this.amount = (this.amount * 1) - (amountToDecrement * 1);
		// toggleUpdatedFlag();
	}

	this.toggleUpdatedFlag = function(){
		this.recentlyUpdated = !this.recentlyUpdated;
	}

	this.getRecentlyUpdated = function(){
		return this.recentlyUpdated;
	}
}

class userBalance{
	constructor(userName, categories, discretionary){
		var alloc = 0;

		for (var category in categories){
			var cat = categories[category];
			alloc += cat.getCategoryAmount();
		}

		console.log(alloc);

		this.userName = userName;
		this.tiedUp = alloc;
		this.disc = discretionary * 1;
		this.categories = categories;
		this.total = this.tiedUp + this.disc;
	}

	print(){
		console.log("Total is " + this.total + " Tied Up is " + this.tiedUp + " Discretionary is " + this.disc);
	}

	decrementFromDisc(amount){
		this.disc -= amount;
		this.total -= amount;
	}

	decrementFromTiedUp(amount){
		this.tiedUp -= amount;
		this.total -= amount;
	}

	checkForName(nameToCheck){
		var indexOfName = -1;
		for (var categoryIndex = this.categories.length - 1; categoryIndex >= 0; categoryIndex--) {
			if(this.categories[categoryIndex].getUpperCaseCategoryName() == nameToCheck.toUpperCase()){
				indexOfName = categoryIndex;
			}
		}
		return indexOfName;
	}

	getCategoryByName(nameToGet){
		var categoryIndex = this.checkForName(nameToGet);
		if(categoryIndex != -1){
			return this.categories[categoryIndex];
		}else{
			console.log("The given category doesn't exist");
		}
	}

	addCategory(name, amount){
		if(this.checkForName(name) == -1){
			var category = new Category(name, amount);
			this.categories.push(category);
			this.tiedUp += (amount * 1);
			this.total += (amount * 1);
			return true;
		}else{
			console.log("A category already exists with the name " + name);
			return false;
		}
		
	}

	getCategories(){
		return this.categories;
	}

	convertUserToJSON(){
		var userCategories = this.getCategories();
		var userDiscretionary = this.disc;
		var obj = {
			categories: userCategories,
			discretionary: userDiscretionary
		};

		var userAsJSON = JSON.stringify(obj);

		return userAsJSON;
	}
}

export default userBalance;