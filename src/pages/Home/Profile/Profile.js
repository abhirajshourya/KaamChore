import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import React, { useContext } from 'react';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { auth, logout } from '../../../controllers/firebase-controller';
import { useSelector } from 'react-redux';

const Profile = () => {
  // const { setIsSignedIn } = useContext(SignedInContext);
  // const user = useSelector((state) => state.user.user);
  const user = auth.currentUser;
  console.log(user, "from profile");
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
