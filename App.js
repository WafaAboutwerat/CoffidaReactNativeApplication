import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import signUp from './components/signUp';
import login from './components/login';
import Tabs from './components/Tabs';


const Stack = createStackNavigator();

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="signUp" component={signUp} options={{headerShown: false}} />
           <Stack.Screen name="login" component={login} options={{headerShown: false}} />
           <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
        </Stack.Navigator>        
      </NavigationContainer>
    )
  };
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#eee'
  }
});

export default App