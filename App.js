import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/pages/Home/Home';
import { useState } from 'react';
import Signin from './src/pages/Signin/Signin';
import SafeAreaWithInsets from './src/components/SafeAreaWithInsets/SafeAreaWithInsets';

export default function App() {
  const Tab = createBottomTabNavigator();
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <SafeAreaProvider>
      <SafeAreaWithInsets>
        {isSignedIn ? <Home /> : <Signin setIsSignedIn={setIsSignedIn} />}
      </SafeAreaWithInsets>
    </SafeAreaProvider>
  );
}
