import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUp';
import ForgottPassword from './src/screens/ForgottPassword';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginScreen" >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="First" component={FirstScreen} />
        <Drawer.Screen name="Second" component={SecondScreen} />
        <Drawer.Screen name='LoginScreen' component={LoginScreen} />
        <Drawer.Screen name='SignUp' component={SignUp} />
        <Drawer.Screen name='ForgottPassword' component={ForgottPassword} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
