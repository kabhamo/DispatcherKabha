import React from 'react';
//import { AuthStack } from './src/routes/AuthStack';
//import { AppTabs } from './src/routes/AppTabs';
import { Provider } from 'react-redux'
import { store } from './src/state/store';
import DispatcherApp from './src/state';


function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/*{user && user.isLoggedIn ? <AppTabs /> : <AuthStack />}*/}
      <DispatcherApp />
    </Provider>
  );
}

export default App;