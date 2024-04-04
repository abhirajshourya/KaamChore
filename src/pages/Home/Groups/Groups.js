import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';

const Groups = () => {
  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Groups</Text>
      </View>
      <View style={styles.listContainer}></View>
    </SafeAreaWithInsets>
  );
};

export default Groups;
