import { View, Text, TouchableHighlight, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styles, { colourPalette } from '../../styles/main';
import { signIn } from '../../controllers/firebase-controller';
import SafeAreaWithInsets from '../../components/SafeAreaWithInsets/SafeAreaWithInsets';

const Signin = ({ setIsSignedIn, navigation }) => {
  const singInHandler = async () => {
    try {
      const user = await signIn(email, password);
      setIsSignedIn(true);
    } catch (error) {
      Alert.alert('Error', 'Invalid email or password');
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
            onPress={singInHandler}
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
              marginTop: 5,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
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
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaWithInsets>
  );
};

export default Signin;
