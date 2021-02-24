import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

 class Header extends Component {
   render(){
     return(
      <View style={styles.header}>
         <Text style={styles.heading}>Coffida</Text>
      </View>
     );
   }
}


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
   justifyContent: 'center',
    backgroundColor: '#03989e'

  },

  heading: {
    color: '#ffffff',
    fontSize: 20,

  }
})

export default Header