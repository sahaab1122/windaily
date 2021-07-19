import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './app/screens/Splash';
import Login from './app/Auth/Login'
import {
 
  About,
 
} from './app/screens/About';
import Register from './app/Auth/Register';
 
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}

        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: ''}}

        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: ''}}

        />

        <Stack.Screen
          name="About"
          component={About}
          options={{title: ''}}
        />
 
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
