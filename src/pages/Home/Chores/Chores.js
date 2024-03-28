import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';

const Chores = () => {
  return (
    <SafeAreaWithInsets>
      <Text>Chores</Text>
    </SafeAreaWithInsets>
  );
};

export default Chores;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
