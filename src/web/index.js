// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// //
// // ReactDOM.render(<App />, document.getElementById('root'));
// // registerServiceWorker();
//
//
//
// import App from '../App';
// import React from 'react';
// import { AppRegistry } from 'react-native';
//
// // register the app
// AppRegistry.registerComponent('App', () => App);
//
// AppRegistry.runApplication('App', {
//   initialProps: {},
//   rootTag: document.getElementById('root')
// });
// registerServiceWorker();
// import 'babel-polyfill';

// import App from '../App';
// import React from 'react';
import { AppRegistry } from 'react-native';
// import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css';
// import './App.css';
// register the app
//
import boot from "../boot/index";

/**
 * Ionicons icon字体库 依赖react-native-vector-icons
 * @type {[type]}
 */
import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: Ionicons;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);


const app = boot();

AppRegistry.registerComponent('App', () => app);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
// registerServiceWorker();
