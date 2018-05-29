// @flow
import * as React from "react";
import { connect } from "react-redux";
// import {
//   Text,
//   Button,
//   Icon,
// } from "native-base";
//
//
import { Button, Icon } from '../../lib';
import Home from "../../stories/screens/Home";
import datas from "./data";
import { fetchList } from "./actions";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {

	static navigationOptions = ({ navigation }) => {
		//navigation.openDrawer()
		return {
	    title: 'Home Container',
			headerLeft: (
				<Button

				  icon={
				    <Icon
				      name='ios-menu'
				      size={32}
				      color='#333' />
				  }
					buttonStyle={{
				    backgroundColor: "transparent",
				    borderColor: "transparent",
				    borderWidth: 0,
						padding: 10,
				  }}
				  title='' />
				// <Button style={{alignSelf: 'center'}} transparent onPress={()=> navigation.openDrawer() /*navigation.state.params.toggleDrawer()*/}>
				// 	<Icon
				// 		active
				// 		name="menu"
        //
				// 	/>
				// </Button>
			)
	  }
	};

	componentDidMount() {
		this.props.navigation.setParams({toggleDrawer: this._toggleDrawer})
		this.props.fetchList(datas);
	}

	_toggleDrawer = () => {
		this.props.navigation.toggleDrawer();
	}


	render() {
		return <Home navigation={this.props.navigation} list={this.props.data} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
