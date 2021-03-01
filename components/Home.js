import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './Header';

import { FlatList } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
class Home extends Component {
  constructor(props) {
  super(props);

  this.state = {
    isLoading: true,
    locations: null,
    location_id: null
    }
  }
  componentDidMount(){
      this.getData()
  
  }

getData = async () => {
 const value = await AsyncStorage.getItem('@session_token');
 return fetch("http://10.0.2.2:3333/api/1.0.0/find", {
'headers':{
'X-Authorization': value
 }

})
.then((response) => {
  if(response.status === 200){
    return response.json()
  } else if(response.status === 400){
    throw 'bad request';
  }
  else if(response.status === 401){
  throw 'unautharised';
}  else if(response.status === 500){
  throw 'server error';
}
})
.then((responseJson) => {
  this.setState({
    isLoading: false,
    locations: responseJson
  });
})
.catch((error) => {
  console.log(error);
  ToastAndroid.show(error, ToastAndroid.SHORT);
})
}

  render(){
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Local Coffee Shops</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={styles.Button}>Open drawer</Text>
      </TouchableOpacity>

      <FlatList
       data={this.state.locations}
       renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('information', {location_id: item.location_id})}>
        <View style={{padding:20}}>
          <Text>{item.location_name}</Text>
          <Text>Rating:{item.avg_overall_rating}</Text>
        </View>
         </TouchableOpacity>
      )}
      keyExtractor={(item) => item.location_id.toString()} />
      </View>)};}
      
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
  
  },

  Button: {
    backgroundColor: '#03989e',
    color: 'white',
    width: 120,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
    paddingTop:10,
    marginLeft: 140
  }

});

export default Home