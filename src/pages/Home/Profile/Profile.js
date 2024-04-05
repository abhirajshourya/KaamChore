import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { auth, logout } from '../../../controllers/firebase-controller';
import { useDispatch } from 'react-redux';
import styles from '../../../styles/main';

const Profile = () => {
  const dispatch = useDispatch();
  const user = auth.currentUser.toJSON();
  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profile</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.card}>
          <Text>Email: {user.email}</Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            borderColor: 'red',
            borderWidth: 1,
          }}
          onPress={async () => {
            try {
              await logout();
              dispatch({ type: 'user/logout' });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Text
            style={{
              color: 'red',
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWithInsets>
  );
};

export default Profile;
