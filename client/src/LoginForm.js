import React, { Component } from 'react';

class LoginForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			userName: '',
			password: ''
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);

	}

	handleNameChange(event){
		this.setState({userName: event.target.value});
		console.log(this.state.userName);
	}

	handlePasswordChange(event){
		this.setState({password: event.target.value});
	}

	handleLogin(){
		console.log("Log In initiated");
		this.props.handleLogin(this.state.userName, this.state.password);
	}

	handleSignUp(){
		this.props.handleSignUp(this.state.password);
	}

	render(){
		return(
			<div>
				<input type="text" value={this.state.userName} onChange={this.handleNameChange}/>
				<input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
				<button onClick={this.handleLogin}>Login</button>
				<button onClick={this.handleSignUp}>Sign Up</button>
			</div>
		);
	}
}

export default LoginForm;