import React from 'react';
import SignUpFrom from '../../components/SignUpForm';
import {View, Text} from 'react-native';
import styles from './style';

function Register() {
    const title = "<AgendaON/>";
  
    return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <SignUpFrom/>
      </View>
    );
  }

export default Register;
