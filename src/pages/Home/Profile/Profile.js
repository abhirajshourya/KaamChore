import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import React, { useContext } from 'react';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { logout } from '../../../controllers/firebase-controller';
import SignedInContext from '../../../context/SignInContext';

const Profile = () => {
  const { setIsSignedIn } = useContext(SignedInContext);
  return (
    <SafeAreaWithInsets>
      <TouchableHighlight
        onPress={async () => {
          try {
            await logout();
            setIsSignedIn(false);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Text>Logout</Text>
      </TouchableHighlight>
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
