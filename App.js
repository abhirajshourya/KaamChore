import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/pages/Home/Home';
import { useState } from 'react';
import Signin from './src/pages/Signin/Signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/pages/Signup/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { SignedInProvider } from './src/context/SignInContext';
import { useSelector } from 'react-redux';
import { StoreProvider } from './src/redux/store';
import { auth } from './src/controllers/firebase-controller';


export default function AppWrapper() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}

export function App() {
  const user = useSelector((state) => state.user.user);

  const Stack = createNativeStackNavigator();

  const AuthenticationPage = () => {
    return (
      <Stack.Navigator
        initialRouteName="Signin"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {user
          ? <Home /> : <AuthenticationPage />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
