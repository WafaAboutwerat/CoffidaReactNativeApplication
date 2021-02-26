import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



class MyAccount extends Component {
  render(){
    const navigation = this.props.navigation;
    return (
    <View>
      <Text style={styles.title}>My Information:</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} >
        <Text style={styles.Button}>Go Back</Text>
      </TouchableOpacity>
     </View>
    
    
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
  
  },

  Button: {
    backgroundColor: '#03989e',
    color: 'white',
    width: 120,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 300,
    paddingTop:10,
    marginLeft: 150
  }

});

export default MyAccount