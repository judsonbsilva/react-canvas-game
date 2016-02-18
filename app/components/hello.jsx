import React from 'react';
import {Text, Surface} from 'react-canvas';

class Hello extends React.Component {
  
	render(){

		let surfaceWidth = window.innerWidth - 3,
			surfaceHeight = window.innerHeight - 3,
			textStyle = this.getTextStyle();

		console.log( this );
		window.tst = this;

		return (
			<Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
				<Text style={textStyle}>Hello World</Text>
			</Surface>
		);
	}

	getImageHeight () {
		return Math.round(window.innerHeight / 2);
	}

	getTextStyle() {
		return {
			top:350,
			left: window.innerWidth/2 - 100,
			width: 200,
			height: 35,
			lineHeight: 30,
			fontSize: 25,
			backgroundColor: '#eee'
		};
	}

}

export default Hello;