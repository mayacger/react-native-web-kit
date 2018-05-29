// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
import {
  View,
	Text,
} from 'react-native';
//

//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// 	web: '这是react-native-web 页面'
// });
//
// const CButton = (props) => (
// 	<Button {...props}>
// 		{props.children}
// 	</Button>
// )
//
// export default class App extends Component {
//   render() {
//     return (
// 			<Container style={styles.container}>
// 					<Button success={true}><Text> Success </Text></Button>
// 					<View><Text>{instructions}</Text></View>
// 			</Container>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// @flow
import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Button, Icon } from './lib';
// import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
// import Sidebar from "./container/SidebarContainer";

// const Home = () => (
// 	<View><Text>home</Text></View>
// )
// const BlankPage = () => (
// 	<View><Text>BlankPage</Text></View>
// )
// const Login = () => (
// 	<View><Text>Login</Text></View>
// )
const Drawer = createStackNavigator(
	{
		Home: { screen: Home },
		BlankPage: { screen: BlankPage },
	},
	{
		initialRouteName: "Home",
		navigationOptions: {
			headerBackTitle: null,
			headerLeft: ({onPress}) => {
				return(
					<Button
						onPress={onPress}

					  icon={
							<Icon
					      name='ios-arrow-back'
					      size={28}
					      color='#333' />
						}
						buttonStyle={{
					    backgroundColor: "transparent",
					    borderColor: "transparent",
					    borderWidth: 0,
							padding: 10,
					  }}
					  title=''
					/>
				)
			},
		}
	}
);
//
//
const App =  createDrawerNavigator(
	{
		Login: {
			screen: Login,
			path:'/login',
		},

		Drawer: {
			screen: Drawer,
			path: '/home'
		},
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
		// contentComponent: props => <Sidebar {...props} />,
	}
);

export default () => (
		<App />
);
