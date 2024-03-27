import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import Home from './src/pages/Home/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})