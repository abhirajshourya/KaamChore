import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';

const Chores = () => {
  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Chores</Text>
      </View>
      <View style={styles.listContainer}></View>
    </SafeAreaWithInsets>
  );
};

export default Chores;
