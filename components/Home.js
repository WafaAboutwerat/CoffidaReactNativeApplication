import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Header from './Header';

class Home extends Component {
  render(){
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Local Coffee Shops</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#eee'
  },

  title: {
    fontSize: 27,
    color: '#03989e',
    textAlign: 'center',
    marginTop: 30
  
  }
});

export default Home