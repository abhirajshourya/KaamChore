import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';
import ChoreCard from '../../../components/ChoreCard/ChoreCard';
import { getUserChores } from '../../../controllers/chores-controller';
import { useSelector, useDispatch } from 'react-redux';
import { setChores } from '../../../redux/choresSlice';

const Chores = () => {
  const chores = useSelector((state) => state.chores.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChores = async () => {
      const chores = await getUserChores();
      dispatch(setChores(chores));
      console.log(chores);
    };
    fetchChores();
  }, []);

  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Chores</Text>
      </View>
      <View style={styles.listContainer}>
        {Object.keys(chores).map((choreId) => {
          return <ChoreCard key={choreId} chore={chores[choreId]} />;
        })}
      </View>
    </SafeAreaWithInsets>
  );
};

export default Chores;
