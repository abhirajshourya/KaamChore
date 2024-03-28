import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/pages/Home/Home';
import { useState } from 'react';
import Signin from './src/pages/Signin/Signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/pages/Signup/Signup';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const Stack = createNativeStackNavigator();

  const AuthenticationPage = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Signin"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return <SafeAreaProvider>{isSignedIn ? <Home /> : <AuthenticationPage />}</SafeAreaProvider>;
}
