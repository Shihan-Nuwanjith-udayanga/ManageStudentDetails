import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/Colors.js';

function AppTextInput({label, icon, ...otherProps}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.labelView}>
        <Text>{label}</Text>
      </View>
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={25}
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
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 15,
  },

  labelView: {
    marginBottom: 5,
    position: 'relative',
    color: colors.medium,
    marginLeft: 10,
  },

  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: 'row',
    width: '95%',
    // height: 60,
    // padding: 15,
    // marginVertical: 10,
    // borderWidth: 1,
    marginBottom: 20,
    borderColor: colors.medium,
  },

  icon: {
    padding: 15,
  },

  textInput: {
    fontSize: 18,
  },
});

export default AppTextInput;
