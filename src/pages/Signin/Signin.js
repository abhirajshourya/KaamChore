import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SafeAreaWithInsets from '../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { auth, signIn } from '../../controllers/firebase-controller';
import styles, { colourPalette } from '../../styles/main';

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();

  const signInHandler = async () => {
    try {
      await signIn(email, password);
      let userInfo = auth.currentUser.toJSON();
      dispatch({ type: 'user/login', payload: userInfo });
      console.log('User signed in', userInfo);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaWithInsets>
      <View
        style={{
          flex: 0.8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.formBox}>
          <Text style={styles.formTitle}>Login to KaamChore</Text>
          <View style={styles.formInput}>
            <TextInput
              placeholder="Email"
              autoCorrect={false}
              defaultValue={email}
              style={{
                width: '90%',
              }}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              placeholder="Password"
              secureTextEntry={isPasswordHidden}
              autoCorrect={false}
              style={{
                width: '90%',
              }}
              defaultValue={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setIsPasswordHidden(!isPasswordHidden);
              }}
              underlayColor="#DDDDDD"
              style={{
                width: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {isPasswordHidden ? (
                <AntDesign name="eyeo" size={24} color="black" />
              ) : (
                <AntDesign name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          <TouchableHighlight
            style={{
              ...styles.formButton,
              backgroundColor:
                email.length === 0 || password.length === 0 ? '#DDDDDD' : colourPalette.primary,
            }}
            onPress={signInHandler}
            disabled={email.length === 0 || password.length === 0}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}
            >
              Log In
            </Text>
          </TouchableHighlight>
          <TouchableOpacity
            style={{
              ...styles.formButton,
              backgroundColor: 'transparent',
            }}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            <Text
              style={{
                color: colourPalette.primary,
                fontSize: 16,
                textDecorationLine: 'underline',
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaWithInsets>
  );
};

export default Signin;
