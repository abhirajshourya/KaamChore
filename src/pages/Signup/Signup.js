import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import SafeAreaWithInsets from '../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import { signUp } from '../../controllers/firebase-controller';
import styles, { colourPalette } from '../../styles/main';

const Signup = ({ navigation }) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = async () => {
    try {
      await signUp(email, password);
      navigation.popToTop();
    } catch (error) {
      Alert.alert('Error', error.message);
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
          <View style={styles.formTitle}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.formTitleText}>Sign-up at KaamChore</Text>
          </View>
          <View style={styles.formInput}>
            <TextInput
              placeholder="Email"
              autoCorrect={false}
              defaultValue={email}
              keyboardType="email-address"
              autoCapitalize="none"
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
            onPress={signUpHandler}
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
