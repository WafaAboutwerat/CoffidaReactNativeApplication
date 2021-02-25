import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';


class MyAccount extends Component {
  render(){
    return (
    
      <Text style={styles.title}>My Information:</Text>
    
    
    );
  }
    
  };


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#eee'
  },

  title: {
    fontSize: 20,
    color: '#03989e',
    marginLeft: 20,
    marginTop: 20
  
  }
});

export default MyAccount