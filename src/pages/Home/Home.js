import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Chores from './Chores/Chores';
import Groups from './Groups/Groups';
import Profile from './Profile/Profile';
import SafeAreaWithInsets from '../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { Text, View } from 'react-native';
import styles from '../../styles/main';

const Home = () => {
  const Tab = createBottomTabNavigator();
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <SafeAreaWithInsets>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Loading...</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>Please wait...</Text>
        </View>
      </SafeAreaWithInsets>
    );
  }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Chores" component={Chores} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;
