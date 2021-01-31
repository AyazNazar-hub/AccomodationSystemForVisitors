import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/color';

const RoleSelecterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={{marginBottom: 100}}>
        <Text style={styles.text}>Chose Your Role</Text>
        <View style={styles.roleContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Traveler')}
              style={styles.button}>
              <Icon name="ios-person" size={100} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>Traveler</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Host')}
              style={styles.button}>
              <Icon name="ios-person" size={100} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>Host</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  text: {
    fontSize: 22,
    color: 'white',
    marginVertical: 30,
    textAlign: 'center',
  },

  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
});

export default RoleSelecterScreen;
