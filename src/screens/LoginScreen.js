import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';

import AppTextInput from './../components/AppTextInput.js';
import AppButton from './../components/AppButton.js';
import colors from '../config/Colors.js';

function LoginScreen() {

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
      <AppTextInput label="Email" placeholder="Email" icon="email" name="email" />
      <AppTextInput
        placeholder="Password"
        icon="lock"
        name="Password"
        label="Password"
        onChangeText={value => handlePasswordChange(value)}
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
      <AppButton title="Log in" />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.socialIcon}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="facebook" style={{fontSize: 50, color: colors.facebook}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="google" style={{fontSize: 50 , color: colors.google }}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')}>
        <Text style={styles.signup}>Have Account Sign up</Text>
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
