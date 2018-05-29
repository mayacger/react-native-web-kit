import React, { Component } from "react";
// import PropTypes from "prop-types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



export default class Content extends Component {
	render() {
		return (
			<KeyboardAwareScrollView
				automaticallyAdjustContentInsets={false}
				resetScrollToCoords={this.props.disableKBDismissScroll ? null : { x: 0, y: 0 }}
				keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps ? this.props.keyboardShouldPersistTaps : 'handled'}
				{...this.props}
				contentContainerStyle={this.props.style}
			>
				{this.props.children}
			</KeyboardAwareScrollView>
		);
	}
}
