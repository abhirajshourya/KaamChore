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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
  const [validation, setValidation] = useState('');

  const signUpHandler = async () => {
    setValidation(() => validateInputs());
    if (validation !== true) {
      return;
    }

    try {
      await signUp(email, password);
      navigation.popToTop();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const validateInputs = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email) || email.length === 0) {
      return 'Invalid email format';
    }

    if (password.length === 0) {
      return 'Password cannot be empty';
    }

    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }

    return true;
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
          <View style={styles.formInput}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={isConfirmPasswordHidden}
              autoCorrect={false}
              style={{
                width: '90%',
              }}
              defaultValue={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setIsConfirmPasswordHidden(!isConfirmPasswordHidden);
              }}
              underlayColor="#DDDDDD"
              style={{
                width: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {isConfirmPasswordHidden ? (
                <AntDesign name="eyeo" size={24} color="black" />
              ) : (
                <AntDesign name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          {validation && (
            <View
              style={{
                marginBottom: 10,
              }}
            >
              <Text style={{ color: 'red' }}>{validation}</Text>
            </View>
          )}
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
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text style={styles.formText}>
              Already have an account?{' '}
              <Text
                style={styles.formLink}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaWithInsets>
  );
};

export default Signup;
