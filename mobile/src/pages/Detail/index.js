import React from 'react';
import DetailsList from '../../components/DetailsList';
import {Text, View} from 'react-native';
import styles from './style';

function Details() {
  const user = "user"

  return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Subject1</Text>
        </View>
        <DetailsList/>
      </View>
  );
}

export default Details;
