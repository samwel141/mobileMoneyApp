/**
 * @format
 */

import * as React from 'react';

import App from './src/app/App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// From https://callstack.github.io/react-native-paper/docs/guides/getting-started/:
// The PaperProvider component provides the theme to all the components in the framework.
// It also acts as a portal to components which need to be rendered at the top level.


export default function Main() {
  return (
      <App />
  );
}

AppRegistry.registerComponent(appName, () => Main);
