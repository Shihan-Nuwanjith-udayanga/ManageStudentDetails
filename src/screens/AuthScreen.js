import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import colors from '../config/Colors.js';

function AuthScreen() {
  const [isGo, setIsGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo == true) {
      setTimeout(() => {
        Navigation.navigate('LoginScreen');
        setIsGo(false);
      }, 3000);
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.studentText}>Student Management System</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
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
});

export default AuthScreen;
