import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';
import ChoreCard from '../../../components/ChoreCard/ChoreCard';
import { getUserChores } from '../../../controllers/chores-controller';
import { useSelector, useDispatch } from 'react-redux';
import { setChores } from '../../../redux/choresSlice';
import { useFocusEffect } from '@react-navigation/native';

const Chores = () => {
  const chores = useSelector((state) => state.chores.value);
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      getUserChores().then((data) => {
        dispatch(setChores(data));
      });
    }, [])
  );

  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Chores</Text>
      </View>
      <View style={styles.listContainer}>
        {Object.keys(chores).map((choreId) => {
          return <ChoreCard key={choreId} chore={chores[choreId]} choreId={choreId} />;
        })}
      </View>
    </SafeAreaWithInsets>
  );
};

export default Chores;
