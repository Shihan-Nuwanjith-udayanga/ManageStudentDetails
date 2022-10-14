import React,{useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppTextInput from './../components/AppTextInput.js';
import AppButton from './../components/AppButton.js';
import colors from '../config/Colors.js';

function SignupScreen() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setUserData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          navigation.navigate('LoginScreen');
          Alert.alert('Registration Successfully...!');
        }
      });
    } catch (error) {
      console.warn(error);
    }
  };

  const setUserData = async () => {
    if ( email.length == 0 || password.length == 0 || confirmPassword.length == 0){
      // Alert.alert('Warning!', 'You Want to Register');
    } else {
      try {
        var user = {
          Email: email,
          Password: password,
          ConfirmPassword: confirmPassword,
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        Alert.alert('Registration Successfully...!');
        console.log(user);
        navigation.navigate('LoginScreen');
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const navigation = useNavigation();

  const [data, setData] = React.useState({
    password: '',
    secureTextEntry: true,
  });

  const handlePasswordChange = value => {
    if (value.length == 0) {
      setData({
        ...data,
        password: value,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Register</Text>
        <Text style={styles.studentText}>Student Management System</Text>
      </View>
      <AppTextInput
        label="Email"
        placeholder="Email"
        icon="email"
        name="email"
        onChangeText={value => setEmail(value)}
      />
      <AppTextInput
        placeholder="Password"
        icon="lock"
        name="password"
        label="Password"
        onChangeText={value => setPassword(value)}
        secureTextEntry={data.secureTextEntry ? true : false}
      />
      <TouchableOpacity onPress={updateSecureTextEntry} style={styles.eyeIcon}>
        {data.secureTextEntry ? (
          <MaterialCommunityIcons
            name="eye-off-outline"
            style={{fontSize: 25}}
          />
        ) : (
          <MaterialCommunityIcons name="eye-outline" style={{fontSize: 25}} />
        )}
      </TouchableOpacity>

      <AppTextInput
        placeholder="Confirm Password"
        icon="lock"
        name="confirmPassword"
        label="Confirm Password"
        onChangeText={value => setConfirmPassword(value)}
        secureTextEntry={true}
        // secureTextEntry={data.secureTextEntry1 ? true : false}
      />
      {/* <TouchableOpacity
        onPress={updateSecureTextEntry1}
        style={styles.eyeIcon1}>
        {data.secureTextEntry1 ? (
          <MaterialCommunityIcons
            name="eye-off-outline"
            style={{fontSize: 25}}
          />
        ) : (
          <MaterialCommunityIcons name="eye-outline" style={{fontSize: 25}} />
        )}
      </TouchableOpacity> */}
      <AppButton title="Sign Up" onPress={setUserData} />
      <TouchableOpacity
        style={styles.loginTouchable}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.signup}>Already Have Account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },

  welcome: {
    marginTop: 30,
    width: '100%',
    marginBottom: 90,
  },

  welcomeText: {
    fontSize: 50,
    marginLeft: 20,
    fontWeight: 'bold',
    color: colors.button,
  },

  studentText: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
    color: colors.medium,
  },

  eyeIcon: {
    position: 'absolute',
    right: 25,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //   eyeIcon1: {
  //     position: 'absolute',
  //     right: 25,
  //     backgroundColor: 'gray',
  //   },

  forgot: {
    marginBottom: 30,
    color: colors.button,
  },

  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginBottom: 50,
  },

  signup: {
    fontSize: 16,
    color: colors.button,
    fontWeight: 'bold',
  },

  loginTouchable: {
    marginTop: 80,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupScreen;
