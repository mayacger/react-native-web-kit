import React, { Component } from "react";
import { Text, Container, List, ListItem, Content, body } from "native-base";
import { ScrollView } from 'react-native';
import { NavigationActions, SafeAreaView, DrawerItems } from "react-navigation";

const routes = [
	{
		route: "Home",
		caption: "Home",
	},
	{
		route: "BlankPage",
		caption: "Blank Page",
	},
	{
		route: "Login",
		caption: "Logout",
	},
];

// export interface Props {
// 	navigation: any,
// }
// export interface State {}
const resetAction = NavigationActions.navigate('Login');
// const resetAction = NavigationActions.init({
// 	index: 0,
// 	actions: [NavigationActions.navigate({ routeName: "Login" })],
// });
export default class Sidebar extends Component {

	navigate = (data) => {
		// this.props.navigation.toggleDrawer();
		// this.props.navigation.navigate("DrawerClose");
		this.props.navigation.dispatch({ type: 'Navigation/CLOSE_DRAWER' });
		this.props.navigation.navigate(data.route);
	}
	render() {
		return (
			<Container>
				<Content>
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										data.route === "Login"
											? this.props.navigation.navigate('Login')
											: this.navigate(data);
									}}
								>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
