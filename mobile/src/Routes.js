import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const appStack = createStackNavigator();

import Home from './pages/Home/index';
import Register from './pages/Register/index';

function Routes() {
  return (
    <NavigationContainer>

        <appStack.Navigator initialRouteName="Home" screenOptions={ { headerShown: false } }>

            <appStack.Screen name="Home" component={Home}/>
            <appStack.Screen name="Register" component={Register}/>

        </appStack.Navigator>
        
    </NavigationContainer>
  );
}

export default Routes;