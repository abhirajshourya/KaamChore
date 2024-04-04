import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Chores from './Chores/Chores';
import Groups from './Groups/Groups';
import Profile from './Profile/Profile';

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Chores" component={Chores} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;
