import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../config/Colors.js';
import AppButton from '../components/AppButton.js';
import AppTextInput from '../components/AppTextInput.js';

function AddStudentDetailsScreen() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentContactNumber, setParentContactNumber] = useState('');
  const [parentEmail, setParentEmail] = useState('');

  useEffect(() => {
    setData();
  },[])


  const getData = () => {
    try {
      AsyncStorage.getItem('StudentData').then(value => {
        if (value != null) {
          navigation.navigate('HomeScreen');
          Alert.alert('Student Details Add In Successfully...!');
        }
      });
    } catch (error) {
      console.warn(error);
    }
  };

  const setData = async () => {
    if(firstName.length == 0 || lastName.length == 0 || contactNumber.length == 0 || email.length == 0 ||
      parentName.length == 0 || parentContactNumber.length == 0 || parentEmail.length == 0){
        Alert.alert("Warning!", "Please Input Your Data!");
      }else{
        try {
          var details = {
            FirstName: firstName,
            LastName: lastName,
            ContactNumber: contactNumber,
            Email: email,
            ParentName: parentName,
            ParentContactNumber: parentContactNumber,
            ParentEmail: parentEmail,
          };
          await AsyncStorage.setItem('StudentData', JSON.stringify(details));
          Alert.alert("Student Data Add Successfully...!");
          console.log(details);
          navigation.navigate('HomeScreen');
        } catch (error) {
          console.warn(error);
        }
      }
  }

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
            onChangeText={value => setFirstName(value)}
            style={styles.input}
          />
          <AppTextInput
            placeholder="Last Name"
            name="lastName"
            inputMode="text"
            label="Last Name"
            onChangeText={value => setLastName(value)}
            style={styles.input}
          />
          <AppTextInput
            placeholder="Contact Number"
            name="contactNumber"
            inputMode="tel"
            keyboardType="number-pad"
            label="Contact Number"
            onChangeText={value => setContactNumber(value)}
            style={styles.input}
          />
          <AppTextInput
            placeholder="Email"
            name="email"
            inputMode="email"
            keyboardType="email-address"
            label="Email"
            onChangeText={value => setEmail(value)}
            style={styles.input}
          />
          <AppTextInput
            placeholder="Parent Name"
            name="parentName"
            inputMode="text"
            label="Parent Name"
            onChangeText={value => setParentName(value)}
            style={styles.input}
          />
          <AppTextInput
            placeholder="Parent Contact Number"
            name="parentContactNumber"
            inputMode="tel"
            keyboardType="number-pad"
            label="Parent Contact Number"
            onChangeText={value => setParentContactNumber(value)}
            style={styles.input}
          />
          <AppTextInput
            placeholder="Parent Email"
            name="parentEmail"
            inputMode="email"
            keyboardType="email-address"
            label="Parent Email"
            onChangeText={value => setParentEmail(value)}
            style={styles.input}
          />
          {/* {title.trim() || desc.trim() ? ( */}
          <AppButton title="Submit" onPress={setData} />
          {/* ) : null} */}
          <View style={{margin: 50}}></View>
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
    marginTop: 10,
  },

  input: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AddStudentDetailsScreen;
