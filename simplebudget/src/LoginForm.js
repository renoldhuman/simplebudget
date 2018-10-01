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
		this.props.handleLogin(this.state.password);
	}

	handleSignUp(){
		this.props.handleSignUp(this.state.password);
	}

	render(){
		return(
			<div className = "CategoryForm">
				<form onSubmit={this.handleLogin}>
        			<label>
          				Username:
          				<input type="text" value={this.state.userName} onChange={this.handleNameChange}/>
        			</label>
        			<label>
        				Password:
        				<input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        			</label>
        			<input type="submit" value="Login" />
        			<button onClick={this.handleSignUp}>Sign Up</button>
     			 </form>
     		</div>
		);
	}
}

export default LoginForm;