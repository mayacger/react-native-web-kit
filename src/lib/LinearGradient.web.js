import React, { Component } from "react";



export default class LinearGradient extends Component  {

	render() {
		let colors = this.props.colors;
		let linearGradient = {...this.props.style, backgroundImage: `-webkit-linear-gradient(top, ${colors})` };
		return (<div {...this.props} style={ linearGradient}>{this.props.children}</div>)
	}

}
