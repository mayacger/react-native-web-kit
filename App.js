// @flow
import boot from "./src/boot/index";

const app = boot();

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader requires main queue setup since it overrides'])

export default app;
