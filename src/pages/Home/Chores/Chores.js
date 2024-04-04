import React from 'react';
import { StyleSheet, Text } from 'react-native';
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
