import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';

import colors from '../config/Colors.js';
import AppButton from '../components/AppButton.js';
import AppTextInput from '../components/AppTextInput.js';

function AddStudentDetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Add Student</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <MaterialCommunityIcons name="home" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>
          <AppTextInput
            placeholder="First Name"
            name="firstName"
            inputMode="text"
            label="First Name"
            style={styles.input}
          />
          <AppTextInput
            placeholder="Last Name"
            name="lastName"
            inputMode="text"
            label="Last Name"
            style={styles.input}
          />
          <AppTextInput
            placeholder="Contact Number"
            name="contactNumber"
            inputMode="tel"
            keyboardType="number-pad"
            label="Contact Number"
            style={styles.input}
          />
          <AppTextInput
            placeholder="Email"
            name="email"
            inputMode="email"
            keyboardType="email-address"
            label="Email"
            style={styles.input}
          />
          <AppTextInput
            placeholder="Parent Name"
            name="parentName"
            inputMode="text"
            label="Parent Name"
            style={styles.input}
          />
          <AppTextInput
            placeholder="Parent Contact Number"
            name="parentContactNumber"
            inputMode="tel"
            keyboardType="number-pad"
            label="Parent Contact Number"
            style={styles.input}
          />
          <AppTextInput
            placeholder="Parent Email"
            name="ParentEmail"
            inputMode="email"
            keyboardType="email-address"
            label="Parent Email"
            style={styles.input}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.white
  },

  header: {
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    justifyContent: 'space-between',
  },

  icon: {
    fontSize: 30,
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.medium,
  },

  text: {
    fontSize: 20,
    color: colors.button,
    fontWeight: 'bold',
  },

  scrollView: {
    width: '100%',
    backgroundColor: colors.white,
  },

  view: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
    marginTop: 10
  },

  input: {
    fontSize: 16,
    marginLeft: 10
  },

});

export default AddStudentDetailsScreen;
