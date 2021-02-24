import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';


class Settings extends Component {
  render(){
    return (
      <Text>Settings</Text>
    )
  };
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#eee'
  }
});

export default Settings