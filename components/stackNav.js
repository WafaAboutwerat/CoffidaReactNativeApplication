import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet} from 'react-native';

import Home from './Home';
import information from './information'

const Stack = createStackNavigator();

class stackNav extends Component {


render(){
    return(
    <Stack.Navigator>
       <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
       <Stack.Screen name="information" component={information}/>
     </Stack.Navigator>
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee'
    }
     });
    
     export default stackNav