import React, { Component } from 'react';
import userBalance from "./User";
import Category from "./User";
import LoginForm from "./LoginForm";
import BudgetContainer from "./BudgetContainer";

class LoginScreen extends Component{

	constructor(props){
		super(props);

		var categories = [];
		var discretionary = 0;
		var user = new userBalance("NONVALIDUSER", categories, discretionary);
		this.state = {
			loggedIn: false,
			userName: "",
			password: "",
			userBalance: user
		}

		this.handleLogin = this.handleLogin.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);

	}


	handleLogin(userPassword){
		console.log(userPassword);
		const that = this;
		// fetch('/users',
		// {
		// 	method: 'GET',
		// 	body: JSON.stringify({userName: that.state.userName, password: userPassword}),//this.state.userName, categoryName, categoryAmount
		// 	headers: {"Content-Type": "application/json"}
		// }).then(function(response){

		// 	response.json().then(function(data){

		// 	var newCategories = [];
		// 	var newUser = new userBalance(that.state.userName, newCategories, data.discretionary);

		// 	for (var i = 0; i < data.categories.length; i++)
		// 	{
		// 		newUser.addCategory(data.categories[i].categoryName, data.categories[i].allocation);
		// 	}

		// 	that.setState(prevState => ({
		// 		userBalance: newUser,
		// 		loggedIn: true
		// 	}));
		// 	});
		// });

		// fetch('/users')
		// .then(response => {
		// 	this.setState({
		// 		loggedIn: true
		// 	})
		// });
				// response.json().then(function(data){
					// var newCategories = [];
					// var newUser = new userBalance(that.state.userName, newCategories, data.discretionary);
					// for (var i = 0; i < data.categories.length; i++)
					// {
					// 	newUser.addCategory(data.categories[i].categoryName, data.categories[i].allocation);
					// }
					// that.setState({
					// 	loggedIn: true
					// 	// userBalance: newUser
					// });
		
		//})
		fetch('users')
		.then(response => {
			response.json()
			.then(data => {
				var newCategories = [];
				var newUser = new userBalance(that.state.userName, newCategories, data.discretionary);
				for (var i = 0; i < data.categories.length; i++)
				{
					newUser.addCategory(data.categories[i].categoryName, data.categories[i].allocation);
				}
				that.setState({
					loggedIn: true,
					userBalance: newUser
				});
			})
		})
		// var newuser = new userBalance("flyboy69", [], 1000);
		// that.setState(prevState => ({
		// 	loggedIn: true,
		// 	userBalance: newuser
		// }));
	}

	handleSignUp(userPassword){
		console.log(userPassword);
	}

	render(){
		return(
			<div>{this.state.loggedIn ? <BudgetContainer userBalance = {this.state.userBalance}/> : <LoginForm handleLogin = {this.handleLogin} handleSignUp = {this.handleSignUp} />}</div>
		)
	}
}

export default LoginScreen;