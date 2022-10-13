import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';

import colors from '../config/Colors.js';
import AppButton from '../components/AppButton.js';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <MaterialCommunityIcons name="home" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <AppButton
          title="Add New Student"
          onPress={() => navigation.navigate('AddStudentDetailsScreen')}
        />
      </View>
      <ScrollView style={styles.scrollView}></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  button: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    backgroundColor: colors.white,
  },
});

export default HomeScreen;
