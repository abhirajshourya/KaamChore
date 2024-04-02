import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import SafeAreaWithInsets from '../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { signUp } from '../../controllers/firebase-controller';
import styles, { colourPalette } from '../../styles/main';

const Signup = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const singUpHandler = async () => {
    try {
      const resp = await signUp(email, password);
      console.log(resp);
    } catch (error) {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

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
          <Text style={styles.formTitle}>Sign-up at KaamChore</Text>
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
            onPress={singUpHandler}
            disabled={email.length === 0 || password.length === 0}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}
            >
              Sign Up
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaWithInsets>
  );
};

export default Signup;
