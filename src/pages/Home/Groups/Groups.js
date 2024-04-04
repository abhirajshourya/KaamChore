import React from 'react';
import { StyleSheet, Text } from 'react-native';
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
