import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Home from './src/pages/Home/Home';
import Signin from './src/pages/Signin/Signin';
import Signup from './src/pages/Signup/Signup';
import { StoreProvider } from './src/redux/store';

export default function AppWrapper() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}

export function App() {
  const user = useSelector((state) => state.user.currentUser);

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
      <SafeAreaProvider>{user ? <Home /> : <AuthenticationPage />}</SafeAreaProvider>
    </NavigationContainer>
  );
}
