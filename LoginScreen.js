import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import Colors from '../constants/color';
import Button from '../components/Button';
import Firebase from '../firebase/config';
import Loader from '../components/Loader';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  const onButtonPress = () => {
    setLoader(true);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User loged in successfully!');
        setLoader(false);
        props.navigation.navigate('RoleSelecter');
      })
      .catch(() => {
        setLoader(false);
        Alert.alert('Authentication Failed');
        console.log('Authentication Failed');
      });
  };

  return loader ? (
    <Loader />
  ) : (
    <View style={styles.screen}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={{width: '100%'}}>
        <View style={styles.inputCoontainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="example@gmail.com"
          />
        </View>
        <View style={styles.inputCoontainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
          />
        </View>
        {/* {error && <Text>{error}</Text>} */}
        <Button
          style={styles.button}
          buttonText="LOG IN"
          onSubmit={onButtonPress}
        />
        <View style={styles.account}>
          <Text style={styles.accountText}>Don't Have Account? </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Register');
            }}>
            <Text style={styles.registerButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  inputCoontainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  input: {
    fontSize: 18,
  },
  button: {
    paddingHorizontal: 0,
    marginVertical: 15,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  accountText: {
    color: 'white',
    fontSize: 18,
  },
  registerButton: {
    color: '#2198d0',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen;
