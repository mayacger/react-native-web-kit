import * as React from "react";
import {
	View,
	Text,
} from 'react-native';
// import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
import { ListItem, Content } from '../../../lib';
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	static navigationOptions = ({ navigation }) => {
		return (
			{
				title: `navigation.state.params ? navigation.state.params.name.item : "Blank Page"`,
		  }
		)
	}
	render() {
		const param = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				{/**<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Blank Page"}</Title>
					</Body>

					<Right />
				</Header>**/}

				<Content>
					<Text>{param !== undefined ? param.name.item : "Create Something Awesome . . ."}</Text>
				</Content>
			</View>
		);
	}
}

export default BlankPage;
