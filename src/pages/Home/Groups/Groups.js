import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';

const Groups = () => {
  return (
    <SafeAreaWithInsets>
      <Text>Groups</Text>
    </SafeAreaWithInsets>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
