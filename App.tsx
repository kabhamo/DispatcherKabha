import React from 'react';
import { AuthStack } from './src/routes/AuthStack';
import { AppTabs } from './src/routes/AppTabs';
import { Provider } from 'react-redux'
import { store } from './src/state/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AuthStack />
    </Provider>
  );
}

export default App;