import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';
import ChoreCard from '../../../components/ChoreCard/ChoreCard';
import { getUserChores } from '../../../controllers/chores-controller';

const Chores = () => {
  const [chores, setChores] = useState([]);

  useEffect(() => {
    const fetchChores = async () => {
      const chores = await getUserChores();
      setChores(chores);
    };
    fetchChores();
  }, []);

  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Chores</Text>
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
