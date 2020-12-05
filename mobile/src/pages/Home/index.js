import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, TouchableOpacity, StyleSheet, Animated } from 'react-native';

function Routes() {
  const title = "<AgendaON/>"

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // ANIMACOES
  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {

    Animated.parallel([
      // bottom to top
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        useNativeDriver: true,
      }).start(),
      // opacity
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start()

  }, [])

  function handleSubmit(){
    const data = {
      name,
      password,
    }
    console.log(data);
  }

  function toRegister(){
    console.log('To register!');
  }

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <Animated.View
      style={[
        styles.container,
        {
          opacity: opacity,
          transform: [
            { translateY : offset.y}
          ]
        }
      ]}>
        <Text style={styles.title}>SignIn</Text>
        <View>
          <TextInput style={styles.input} placeholder="Key" autoCorrect={false} value={name} onChangeText={text => setName(text)}/>
          <TextInput style={styles.input} placeholder="Password" autoCorrect={false} value={password} onChangeText={text => setPassword(text)}/>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.mainButton}  onPress={handleSubmit}>
              <Text style={styles.mainButtonText}>SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={toRegister}>
              <Text style={styles.secondaryButtonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

export default Routes;

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: "center",
    backgroundColor: '#000',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    maxHeight: 50,
    marginTop: 115,
  },
  headerText: {
    color: 'blue',
    fontSize: 32,
  },
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: '38%',
    width: '75%',
    padding: 10,
    position: "relative",
  },
  title: {
    position: "absolute",
    top: 15,
    left: 15,
    color: '#000',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#DCDCDC',
    minWidth: '100%',
    borderColor: '#DCDCDC',
    marginTop: 12,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  footer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  mainButton: {
    marginTop: 16,
    backgroundColor: 'green',
    width: '50%',
    minHeight: 25,
    borderColor: 'green',
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainButtonText: {
    color: 'white',
    fontSize: 16,
  },
  secondaryButton: {
    marginTop: 12,
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 12,
  },
});