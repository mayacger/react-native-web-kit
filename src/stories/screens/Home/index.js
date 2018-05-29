import * as React from "react";
import {
	SafeAreaView,
	View,
	Text,
} from 'react-native';

// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Text,
//   Button,
//   Icon,
//   Left,
//   Body,
//   Right,
//   List,
//   ListItem,
// 	View,
// } from "native-base";

import { ListItem, Content } from '../../../lib';
import styles from "./styles";

export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {

	static navigationOptions = ({ navigation }) => ({
    title: 'Home',
  });

	componentDidMount () {
		// this.props.navigation.setParams({otherParam: 'Updated!'})
	}

	navigate = () => {

		this.props.navigation.toggleDrawer();
	}
  render() {
    return (
      <Content style={styles.container}>
	            {this.props.list.map((item, i) => (
	              <ListItem
	                key={i}
									title={item}
	                onPress={() =>
	                  this.props.navigation.navigate("BlankPage", {
	                    name: { item }
	                  })}
	              >
	              </ListItem>
	            ))}
      </Content>

    );
  }
}

export default Home;
