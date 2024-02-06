/* eslint-disable func-style */
import Navigation from '../shared/navigation';
import { Provider } from 'react-native-paper';
import React from 'react';
// eslint-disable-next-line no-undef
function App(): JSX.Element {
  return (
      <Provider>
        <Navigation/>
      </Provider>
  );
}

export default App;
