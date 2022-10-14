import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../config/Colors.js';
import AppButton from '../components/AppButton.js';

function HomeScreen() {
  const navigation = useNavigation();

  // const [details, setDetails] = useState([]);
  const route = useRoute();

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
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>
          <Text style={styles.text}>Name: {route.params.firstName}</Text>
          <Text style={styles.text}>Last Name: {route.params.lastName}</Text>
          <Text style={styles.text}>Contact Number: {route.params.contactNumber}</Text>
          <Text style={styles.text}>Email: {route.params.email}</Text>
          <Text style={styles.text}>Parent Name: {route.params.parentName}</Text>
          <Text style={styles.text}>ParentContactNumber: {route.params.parentContactNumber}</Text>
          <Text style={styles.text}>Patent Email: {route.params.parentEmail}</Text>
        </View>
      </ScrollView>
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
    width: '100%',
    backgroundColor: colors.white,
  },

  view: {
    backgroundColor: colors.light,
    padding: 10,
    width: '95%',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: 16,
    color: colors.black
  },

});

export default HomeScreen;
