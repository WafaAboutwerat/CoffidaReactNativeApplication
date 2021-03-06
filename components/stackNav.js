import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet} from 'react-native';

import Home from './Home';
import information from './information'
import reviews from './reviews'
import addReview from './addReview'

const Stack = createStackNavigator();

class stackNav extends Component {


render(){
    return(
    <Stack.Navigator>
       <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
       <Stack.Screen name="information" component={information}/>
       <Stack.Screen name="reviews" component={reviews}/>
       <Stack.Screen name="addReview" component={addReview}/>
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