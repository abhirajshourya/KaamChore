import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { logout } from '../../../controllers/firebase-controller';
import { useDispatch } from 'react-redux';
import styles from '../../../styles/main';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profile</Text>
      </View>
      <View style={styles.listContainer}>
        <TouchableOpacity
          onPress={async () => {
            try {
              await logout();
              dispatch({ type: 'user/logout' });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWithInsets>
  );
};

export default Profile;
