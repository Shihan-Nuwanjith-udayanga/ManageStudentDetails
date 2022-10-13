import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../config/Colors.js';

function AppButton({title, onPress, color = 'button'}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.text}>hello</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    borderRadius: 15,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 10,
  },

  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
