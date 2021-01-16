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

const RegisterScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const onButtonPress = () => {
    setLoader(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setLoader(false);
        console.log('User registered successfully!');
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
        <Text style={styles.text}>Register</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor="white"
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor="white"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor="white"
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            buttonText="Register"
            onSubmit={onButtonPress}
          />
          <Button
            style={styles.button}
            buttonText="Cancel"
            onSubmit={() => {
              props.navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  input: {
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  button: {
    width: '50%',
  },
});

export default RegisterScreen;
