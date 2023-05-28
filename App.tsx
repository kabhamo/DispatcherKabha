import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import DispatcherApp from './src/DispatcherApp';
import { store } from './src/state/store';

function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <DispatcherApp />
    </Provider>
  );
}

export default App;