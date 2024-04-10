import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Chores from './Chores/Chores';
import Groups from './Groups/Groups';
import Profile from './Profile/Profile';
import SafeAreaWithInsets from '../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { Text, View } from 'react-native';
import styles from '../../styles/main';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 14, marginBottom: 5 },
        tabBarStyle: { height: 60, padding: 5 },
      }}
    >
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chores"
        component={Chores}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
