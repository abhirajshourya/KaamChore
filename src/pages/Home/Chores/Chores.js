import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';
import ChoreCard from '../../../components/ChoreCard/ChoreCard';
import { AntDesign } from '@expo/vector-icons';
import { getUserChores } from '../../../controllers/chores-controller';

const Chores = () => {
  const [chores, setChores] = useState(getUserChores());

  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Chores</Text>
        <TouchableOpacity style={styles.headerButton}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {chores.length !== 0 ? (
          chores.map((chore, index) => {
            return ChoreCard({ index, chore });
          })
        ) : (
          <Text style={styles.noItemInList}>No chores to show!</Text>
        )}
      </View>
    </SafeAreaWithInsets>
  );
};

export default Chores;
