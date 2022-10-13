import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppTextInput from './../components/AppTextInput.js';
import AppButton from './../components/AppButton.js';
import colors from '../config/Colors.js';

function LoginScreen() {
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
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.studentText}>Student Management System</Text>
      </View>
      <AppTextInput placeholder="Username" icon="email" name="Username" />
      <AppTextInput
        placeholder="Password"
        icon="lock"
        name="Password"
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
          <MaterialCommunityIcons name="facebook" style={{fontSize: 50}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="google" style={{fontSize: 50}} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
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
    backgroundColor: 'white',
    flex: 0.5,
    width: '100%',
    marginBottom: 150,
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
    paddingTop: 50,
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
    marginTop: 10,
    color: colors.button,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
