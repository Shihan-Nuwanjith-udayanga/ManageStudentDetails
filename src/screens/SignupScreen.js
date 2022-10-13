import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';

import AppTextInput from './../components/AppTextInput.js';
import AppButton from './../components/AppButton.js';
import colors from '../config/Colors.js';

function SignupScreen() {

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

  //   const updateSecureTextEntry1 = () => {
  //     setData({
  //       ...data,
  //       secureTextEntry: !data.secureTextEntry1,
  //     });
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Register</Text>
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

      <AppTextInput
        placeholder="Confirm Password"
        icon="lock"
        name="Confirm Password"
        label="Confirm Password"
        onChangeText={value => handlePasswordChange(value)}
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
      <AppButton title="Sign Up" />
      <TouchableOpacity style={styles.loginTouchable} onPress={()=>navigation.navigate('LoginScreen')}>
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
    justifyContent:'center',
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
