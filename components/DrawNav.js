import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from '@react-navigation/drawer';



import Home from './Home';
import MyAccount from './MyAccount';
import Settings from './Settings';
import tab from './tab';



      // <Tab.Navigator
      //    screenOptions={({ route }) => ({
      //      tabBarIcon: ({ focused, color, size }) => {
      //       let iconName;
      //       if (route.name === 'Home'){
      //         iconName = focused ? 'home' : 'home-outline';
      //       } else if (route.name === 'MyAccount'){
      //         iconName = focused ? 'person' : 'person-outline';
      //         }
      //       else if (route.name === 'Settings'){
      //         iconName = focused ? 'settings' : 'settings-outline';
      //       }
            
      //       return <Ionicons name={iconName} size={size} color={color}/>
      //       }
      //      })}
          
      //      tabBarOptions={{
      //        activeTintColor: '#03989e',
      //        inactiveTintColor: 'gray',

      //      }}
          
      //     >

           
      //      <Tab.Screen name="Home" component={Home} />
      //      <Tab.Screen name="MyAccount" component={MyAccount} />
      //      <Tab.Screen name="Settings" component={Settings} />
           
      //   </Tab.Navigator>

//const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

class DrawNav extends Component {

  render(){
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
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