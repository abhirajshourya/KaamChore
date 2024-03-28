import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/pages/Home/Home';
import { useState } from 'react';
import Signin from './src/pages/Signin/Signin';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <SafeAreaProvider>
        {isSignedIn ? <Home /> : <Signin setIsSignedIn={setIsSignedIn} />}
    </SafeAreaProvider>
  );
}
