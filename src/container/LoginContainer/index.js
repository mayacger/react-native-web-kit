// // @flow
import React, { Component } from "react";
import {
  View,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import {Field,  reduxForm } from "redux-form";
import { Input } from 'react-native-elements';

import { Icon, Button } from '../../lib';
import Login from "../../stories/screens/Login";




const { width } = Dimensions.get('window');
//
const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
//
// export interface Props {
//   navigation: any;
// }
// export interface State {}
// class LoginForm extends React.Component<Props, State> {
//   textInput: any;
//
//   renderInput({ input, label, type, meta: { touched, error, warning } }) {
//     return (
//       <Item error={error && touched}>
//         <Icon active name={input.name === "email" ? "person" : "unlock"} />
//         <Input
//           ref={c => (this.textInput = c)}
//           placeholder={input.name === "email" ? "Email" : "Password"}
//           secureTextEntry={input.name === "password" ? true : false}
//           {...input}
//         />
//       </Item>
//     );
//   }
//
//   login() {
//     if (this.props.valid) {
//       this.props.navigation.navigate("Drawer");
//     } else {
//       Toast.show({
//         text: "Enter Valid Username & password!",
//         duration: 2000,
//         position: "top",
//         textStyle: { textAlign: "center" }
//       });
//     }
//   }
//
//   render() {
//     const form = (
//       <Form>
//         <Field
//           name="email"
//           component={this.renderInput}
//           validate={[email, required]}
//         />
//         <Field
//           name="password"
//           component={this.renderInput}
//           validate={[alphaNumeric, minLength8, maxLength15, required]}
//         />
//       </Form>
//     );
//     return (
//       <Login
//         navigation={this.props.navigation}
//         loginForm={form}
//         onLogin={() => this.login()}
//       />
//     );
//   }
// }
//

class LoginForm extends Component {

	state = {
    type: 'money',
  }

	_onLayout = (event) => {
		// let {x, y, width, height} = event.nativeEvent.layout;
		// console.log(x, y, width, height);
	}
	login = () => {
	  if (this.props.valid) {
	    this.props.navigation.navigate("Drawer");
	  } else {
	  //   Toast.show({
	  //     text: "Enter Valid Username & password!",
	  //     duration: 2000,
	  //     position: "top",
	  //     textStyle: { textAlign: "center" }
	  //   });
	  }
	}

	renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
					<Input
						placeholder={input.name === 'email' ? '用户名' : '密码'}
						leftIcon={
							<Icon
								name={input.name === 'email' ? 'ios-person' : 'ios-lock'}
								size={24}
								color='black'
							/>
						}
						containerStyle={{
							backgroundColor: 'rgba(255,255,255,.65)',
							borderRadius: 50,
							overflow: 'hidden',
							marginBottom: 30,
						}}
						inputContainerStyle={{borderBottomWidth: 0,}}
						error={error && touched}
						{...input}
					/>
    );
  }
	render() {
		const form = (
			<View style={{ alignItems: 'center'}} onLayout={this._onLayout}>
				<Field
					name="email"
					component={this.renderInput}
					validate={[email, required]}
				/>
				<Field
					name="password"
					component={this.renderInput}
					validate={[alphaNumeric, minLength8, maxLength15, required]}
				/>
			{/*<Input
					  placeholder='用户名'
						leftIcon={
					    <Icon
					      name='ios-person'
					      size={24}
					      color='black'
					    />
					  }
						containerStyle={{
							backgroundColor: 'rgba(255,255,255,.65)',
							borderRadius: 50,
							overflow: 'hidden',
							marginBottom: 30,
						}}
						inputContainerStyle={{borderBottomWidth: 0,}}
					/>
					<Input

						placeholder='密码'
						secureTextEntry={true}
						leftIcon={
							<Icon
								name='ios-lock'
								size={24}
								color='black'
							/>
						}
						containerStyle={{
							backgroundColor: 'rgba(255,255,255,.65)',
							borderRadius: 50,
							overflow: 'hidden',
						}}
						inputContainerStyle={{borderBottomWidth: 0,}}
					/>*/}

			</View>
		)
		return (

				<Login
					navigation={this.props.navigation}
					onLogin={() => this.login()}
					loginForm={form}/>
		)
	}
}

const LoginContainer = reduxForm({
  form: "login"
})(LoginForm);
export default LoginContainer;
