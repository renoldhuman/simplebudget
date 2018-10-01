import React, { Component } from 'react';

class BackgroundFade extends Component{
	render(){
		var fadeStyle = {
			backgroundColor: 'black',
			opacity: 0.5,
			width: '100%',
			minHeight: '100%',
			minWidth: '100%',
			height: '100%',
			zIndex: 1
		};
		return(
			<div style={fadeStyle}></div>
		);
	}
}

export default BackgroundFade