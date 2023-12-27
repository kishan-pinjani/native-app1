import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import HomeScreen from './src/screens/HomeScreen';
import Form from './src/screens/Form';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginForm from './src/screens/LoginForm';
import LoginScreen from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUp';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginScreen">
        <Drawer.Screen name="Login" component={Form} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="First" component={FirstScreen} />
        <Drawer.Screen name="Second" component={SecondScreen} />
        <Drawer.Screen name="LoginForm" component={LoginForm} />
        <Drawer.Screen name='LoginScreen' component={LoginScreen} />
        <Drawer.Screen name='SignUp' component={SignUp} />
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
