import React from 'react';
import SignInForm from '../../components/SignInForm';
import {Text, View} from 'react-native';
import styles from './style';

function Routes() {
  const title = "<AgendaON/>";

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <SignInForm style={styles.form}/>
    </View>
  );
}

export default Routes;
