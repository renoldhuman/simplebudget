import React, { Component } from 'react';
import "./MoneyContainer.css"


class MoneyContainer extends Component{
	constructor(props){
		super(props);

		this.handleAddClick = this.handleAddClick.bind(this);
		this.handleDecClick = this.handleDecClick.bind(this);
	}

	handleAddClick(){
		this.props.handleAddClick();
	}

	handleDecClick(){
		this.props.handleDecClick();
	}

	render(){
		return(
			<div className="MoneyContainer">
				<button className="FundButton" id="addMoneyButton" onClick={this.handleAddClick}> ADD MONEY </button>
				<button className="FundButton" id="spendMoneyButton" onClick={this.handleDecClick}> SPEND MONEY </button>
			</div>
		);
	}
}

export default MoneyContainer;