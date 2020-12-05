import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const appStack = createStackNavigator();

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function Routes() {
  return (
    <NavigationContainer>

        <appStack.Navigator initialRouteName="Login" screenOptions={ { headerShown: false } }>

            <appStack.Screen name="Login" component={Login}/>
            <appStack.Screen name="Register" component={Register}/>
            <appStack.Screen name="Home" component={Home}/>

        </appStack.Navigator>
        
    </NavigationContainer>
  );
}

export default Routes;
