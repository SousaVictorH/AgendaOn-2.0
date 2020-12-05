import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'
import {View, Text, Animated, TextInput, TouchableOpacity, TouchableHighlightComponent} from 'react-native';
import styles from './style';

function SignUpForm(){
    // VARIAVEIS
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAux, setPasswordAux] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // ANIMACOES
    const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
    const [opacity] = useState(new Animated.Value(0));

    const navigation = useNavigation();

    useEffect(() => {

        Animated.parallel([
          // bottom to top
          Animated.spring(offset.y, {
            toValue: 0,
            speed: 4,
            useNativeDriver: true,
          }),
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
          passwordAux,
          email,
          phone
        }
        console.log(data);
        toLogin();
      }
    
      function toLogin(){
        navigation.navigate('Login');
      }

    return(
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
            <Text style={styles.title}>SignUp</Text>
            <View>
              <View style={styles.line}>
                <TextInput style={styles.input} placeholder="Name" autoCorrect={false} value={name} onChangeText={text => setName(text)}/>
              </View>
              <View style={styles.line}>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" value={password} onChangeText={text => setPassword(text)}/>
              </View>
              <View style={styles.line}>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Password again" value={passwordAux} onChangeText={text => setPasswordAux(text)}/>
              </View>
              <View style={styles.line}>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={text => setEmail(text)}/>
              </View>
              <View style={styles.line}>
                <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={text => setPhone(text)}/>
              </View>
              <View style={styles.footer}>
                  <TouchableOpacity style={styles.mainButton}  onPress={handleSubmit}>
                    <Text style={styles.mainButtonText}>SignUp</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </Animated.View>
    );
}

export default SignUpForm;
