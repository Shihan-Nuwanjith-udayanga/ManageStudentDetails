import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppTextInput from './../components/AppTextInput.js';
import AppButton from './../components/AppButton.js';
import colors from '../config/Colors.js';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setUserData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          navigation.navigate('AddStudentDetailsScreen');
          Alert.alert('Login Successfully...!');
        }
      });
    } catch (error) {
      console.warn(error);
    }
  };

  const setUserData = async () => {
    if (
      email.length == 0 ||
      password.length == 0
    ) {
      // Alert.alert('Warning!', 'Empty Email and Password');
    } else {
      try {
        var user = {
          Email: email,
          Password: password,
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        Alert.alert('Login Successfully...!');
        console.log(user);
        navigation.navigate('AddStudentDetailsScreen');
      } catch (error) {
        console.warn(error);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User info', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
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
        <Text style={styles.welcomeText}>Log In</Text>
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
        name="Password"
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
      <AppButton title="Log in" onPress={setUserData} />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.socialIcon}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="facebook"
            style={{fontSize: 50, color: colors.facebook}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={googleLogin}>
          <MaterialCommunityIcons
            name="google"
            style={{fontSize: 50, color: colors.google}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.signup}>Need Account Sign up?</Text>
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
    width: '100%',
    marginBottom: 100,
    marginTop: 40,
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
    paddingTop: 65,
  },

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
    padding: 10,
    color: colors.button,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
