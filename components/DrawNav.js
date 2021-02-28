import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import stackNav from './stackNav'
import Settings from './Settings';
import tab from './tab';


const Drawer = createDrawerNavigator();

class DrawNav extends Component {

  render(){
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={stackNav}/>
        <Drawer.Screen name="MyAccount" component={tab}/>
        <Drawer.Screen name="Settings" component={Settings}/>

      </Drawer.Navigator>
         
    );
    
  } 
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#eee'
  }
});


export default DrawNav