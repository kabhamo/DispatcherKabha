import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/state/store';
import DispatcherApp from './src/state';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <DispatcherApp />
    </Provider>
  );
}

export default App;