import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/Colors.js';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={25}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    flexDirection: 'row',
    width: '95%',
    height: 60,
    // padding: 15,
    marginVertical: 10,
    // borderWidth: 1,
    borderColor: colors.medium
  },

  icon: {
    padding: 15,
  },

  textInput: {
    fontSize: 18,
  },
});

export default AppTextInput;
