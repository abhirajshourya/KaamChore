import { View, Text, TextInput } from 'react-native';
import React from 'react';
import SafeAreaWithInsets from '../../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../../styles/main';

const AddChore = ({ navigation, route }) => {
  const groupId = route.params.groupId;
  const members = route.params.members;

  return (
    <SafeAreaWithInsets>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.formBox}>
          <View style={styles.formTitle}>
            <Text style={styles.formTitleText}>Add Chore</Text>
          </View>
          <View style={styles.formInput}>
            <TextInput placeholder="Chore Name" />
          </View>
          <View style={styles.formInput}>
            <TextInput placeholder="Description" />
          </View>
          <View style={styles.formButton}>
            <Text style={styles.modalButtonText}>Submit</Text>
          </View>
        </View>
      </View>
    </SafeAreaWithInsets>
  );
};

export default AddChore;
