import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppTextInput from './../components/AppTextInput.js';
import colors from '../config/Colors.js';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <AppTextInput placeholder="Username" icon="email" name="Username" />
      <AppTextInput
        placeholder="Password"
        icon="form-textbox-password"
        name="Password"
        secureTextEntry= {true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

export default LoginScreen;
