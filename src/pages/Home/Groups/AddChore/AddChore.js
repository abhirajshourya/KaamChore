import { View, Text } from 'react-native';
import React from 'react';
import SafeAreaWithInsets from '../../../../components/SafeAreaWithInsets/SafeAreaWithInsets';

const AddChore = ({ navigation, route }) => {
  const groupId = route.params.groupId;
  const members = route.params.members;

  return (
    <SafeAreaWithInsets>
      <Text>Add Chore</Text>
      <Text>{groupId}</Text>
      <Text>{members}</Text>
    </SafeAreaWithInsets>
  );
};

export default AddChore;
