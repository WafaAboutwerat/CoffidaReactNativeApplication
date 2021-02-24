import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';


class MyAccount extends Component {
  render(){
    return (
      <Text>MyAccount</Text>
    )
  };
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#eee'
  }
});

export default MyAccount