'use strict';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');
if (process.env.NODE_ENV === 'development') {
	const consoleError = console.error;
	console.error = function (msg) {
		let errorTips = ['React does not recognize', 'Received `false` for a non-boolean attribute', 'Received `true` for a non-boolean'];
		let isIgnore = false;
		errorTips.map((item) => {
			if (msg.search(item) >= 0) return isIgnore = true;
		});
		if(!isIgnore) {
			return consoleError(msg);
		}
		// if(msg.search() === -1 ) {
		// 	return consoleError(msg);
		// }
		return 0;
	};
}
// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
