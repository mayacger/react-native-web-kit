import React, { Component } from "react";
import {
	SafeAreaView,
	View,
	Dimensions,
	TouchableOpacity,
 } from "react-native";
// import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
//import styles from "./styles";
import { Content, Icon, LinearGradient, Button } from '../../../lib';


const { width } = Dimensions.get('window');

export interface Props {
	loginForm: any,
	onLogin: Function,
}
// const { height, width } = Dimensions.get('window');
export interface State {}
class Login extends Component {
	render() {
		console.log(this.props,';;;');
		return (
			<LinearGradient
				style={{flex: 1, display: 'flex'}}
				colors={['#4c669f', '#3b5998', '#192f6a']}
				>
				<SafeAreaView style={{flex: 1}}>
						<Content style={{flex: 1}}>

								<View style={{alignItems: 'center',flex:1,justifyContent: 'center'}}>
									<Icon
										name="md-checkmark-circle-outline"
										style={{fontSize: 100,color:'rgba(0, 132, 255,.95)' }}
										 />
								</View>
								{this.props.loginForm}

								<View style={{alignItems: 'center', flex:1}}>
								<TouchableOpacity onPress={this.props.onLogin}>
									<Button
										title="登录"
										loading={false}
										onPress={this.props.onLogin}
										loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
										titleStyle={{ fontWeight: "700" }}
										buttonStyle={{
											backgroundColor: "rgba(92, 99,216, 1)",
											width: width * 0.9,
											height: 45,
											borderColor: "transparent",
											borderWidth: 0,
											borderRadius: 50,
										}}
										containerStyle={{
											marginTop: 20,
											borderColor: "#000",
											borderWidth: 0,
										}}
										style={{
											borderColor: "#000",
											borderWidth: 0,
										}}
									/>
							</TouchableOpacity>
						</View>
						</Content>
				</SafeAreaView>
			</LinearGradient>
		)
		// return (
		// 	<Container>
		// 		<Header style={{ height: 200 }}>
		// 			<Body style={{ alignItems: "center" }}>
		// 				<Icon name="flash" style={{ fontSize: 104 }} />
		// 				<Title>ReactNativeSeed.com</Title>
		// 				<View padder>
		// 					<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
		// 						Build Something Amazing
		// 					</Text>
		// 				</View>
		// 			</Body>
		// 		</Header>
		// 		<Content>
		// 			{this.props.loginForm}
		// 			<View padder>
		// 				<Button block onPress={() => this.props.onLogin()}>
		// 					<Text>Login</Text>
		// 				</Button>
		// 			</View>
		// 		</Content>
		// 		<Footer style={{ backgroundColor: "#F8F8F8" }}>
		// 			<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
		// 				<View padder>
		// 					<Text style={{ color: "#000" }}>Made with love at </Text>
		// 				</View>
		// 				<Image
		// 					source={{ uri: "https://geekyants.com/images/logo-dark.png" }}
		// 					style={{ width: 422 / 4, height: 86 / 4 }}
		// 				/>
		// 			</View>
		// 		</Footer>
		// 	</Container>
		// );
	}
}

export default Login;
