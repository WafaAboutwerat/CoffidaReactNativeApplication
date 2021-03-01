import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import MyAccount from './MyAccount';
import edit from './edit';

const Tab = createBottomTabNavigator();

class tab extends Component {

render(){
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
           let iconName;

           if (route.name === 'MyAccount'){
             iconName = focused ? 'person' : 'person-outline';
             
           } else if (route.name === 'edit'){
             iconName = focused ? 'create' : 'create-outline';
           }
           return <Ionicons name={iconName} size={size} color={color}/>
           }
          })}
         
          tabBarOptions={{
            activeTintColor: '#03989e',
            inactiveTintColor: 'gray',

          }}
              >
          <Tab.Screen name="MyAccount" component={MyAccount} />
          <Tab.Screen name="edit" component={edit} />
        </Tab.Navigator>
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee'
    }
     });

     export default tab