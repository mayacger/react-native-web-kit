import React from 'react';
import {
	TouchableOpacity,
} from 'react-native';
import { Button as Btn } from 'react-native-elements';


export const Button  = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
				<Btn {...props} style={[{
					borderColor: "#000",
					borderWidth: 0,
				}, props.style]} />
		</TouchableOpacity>
	)
}
