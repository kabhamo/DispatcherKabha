import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/state/store';
import DispatcherApp from './src/DispatcherApp';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/*<NavigationContainer>*/}
      <DispatcherApp />
      {/*</NavigationContainer>*/}
    </Provider>
  );
}

export default App;