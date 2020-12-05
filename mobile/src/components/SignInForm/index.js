import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'
import {View, Text, Animated, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

function SignInForm(){
    // VARIAVEIS
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
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
        }
        console.log(data);
      }
    
      function toRegister(){
        navigation.navigate('Register');
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
            <Text style={styles.title}>SignIn</Text>
            <View>
            <TextInput style={styles.input} placeholder="Key" autoCorrect={false} value={name} onChangeText={text => setName(text)}/>
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" autoCorrect={false} value={password} onChangeText={text => setPassword(text)}/>
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
    );
}

export default SignInForm;
