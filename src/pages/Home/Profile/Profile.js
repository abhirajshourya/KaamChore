import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { logout } from '../../../controllers/firebase-controller';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaWithInsets>
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
    </SafeAreaWithInsets>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
