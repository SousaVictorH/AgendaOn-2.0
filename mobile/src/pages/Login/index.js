import React from 'react';
import SignInForm from '../../components/SignInForm';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './style';

function Login() {
  const title = "<AgendaON/>";

  return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <SignInForm/>
      </View>
  );
}

export default Login;
