import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';
import GroupCard from '../../../components/GroupCard/GroupCard';

const Groups = () => {
  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Groups</Text>
      </View>
      <ScrollView style={styles.listContainer}>
        {
          // TODO: Replace with dynamic data
          Array.from({ length: 2 }).map((_, index) => (
            <GroupCard key={index + 1} index={index} />
          ))
        }
      </ScrollView>
    </SafeAreaWithInsets>
  );
};

export default Groups;
