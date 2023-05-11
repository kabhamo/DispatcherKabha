import React from 'react';
import { AuthStack } from './src/routes/AuthStack';
import { AppTabs } from './src/routes/AppTabs';
import auth from '@react-native-firebase/auth';


function App(): JSX.Element {
  return (
    <AuthStack />
  );
}

export default App;