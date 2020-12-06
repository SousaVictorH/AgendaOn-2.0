import React from 'react';
import FlatList from '../../components/SubjectsList';
import {Text, View} from 'react-native';
import styles from './style';

function Home() {
  const user = "user"

  return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello, {user}</Text>
        </View>
        <FlatList/>
      </View>
  );
}

export default Home;
