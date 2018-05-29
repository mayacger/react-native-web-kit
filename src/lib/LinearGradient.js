import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
	Text,
	SafeAreaView,
} from 'react-native';
import LGradient from 'react-native-linear-gradient';

/**
 *
 * <LinearGradient
	 start={{x: 0.0, y: 0.25}}
	 end={{x: 0.5, y: 1.0}}
	 locations={[0,0.5,0.6]}
	 colors={['#4c669f', '#3b5998', '#192f6a']}
	 >
 */

export default class LinearGradient extends Component  {

	render() {
		return (<LGradient {...this.props}>{this.props.children}</LGradient>)
	}

}
