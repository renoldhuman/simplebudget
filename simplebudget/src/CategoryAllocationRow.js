import React, { Component } from 'react';

class CategoryAllocationRow extends Component{
	constructor(props){
		super(props);

		this.state = {
			categoryName: this.props.name,
			allocation: 0
		}

	}

	handleSubmit(event){
		console.log(event.target.value);
		this.setState({
			allocation: event.target.value
		});
		console.log(this.state.allocation);
		this.props.handleSubmit(this.state.categoryName, event.target.value);
	}

	render(){
		return(
			<div className="CategoryAllocationRow">
				<form onSubmit={this.handleSubmit}>
					<label>
						{this.state.categoryName}
					</label>
					<input type="text" value={this.state.allocation} onInput={this.handleSubmit.bind(this)}/>
				</form>
			</div>
		);
	}
}

export default CategoryAllocationRow;