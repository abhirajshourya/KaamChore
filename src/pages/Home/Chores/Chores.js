import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';
import ChoreCard from '../../../components/ChoreCard/ChoreCard';

const Chores = () => {
  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Chores</Text>
      </View>
      <View style={styles.listContainer}>
        {Array.from({ length: 2 }).map((_, index) => (
          <ChoreCard key={index + 1} index={index} />
        ))}
      </View>
    </SafeAreaWithInsets>
  );
};

export default Chores;
