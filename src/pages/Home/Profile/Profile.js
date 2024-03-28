import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';

const Profile = () => {
  return (
    <SafeAreaWithInsets>
      <Text>Profile</Text>
    </SafeAreaWithInsets>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
