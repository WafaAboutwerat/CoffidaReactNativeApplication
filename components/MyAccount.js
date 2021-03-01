import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class MyAccount extends Component {
constructor(props){
  super(props);

  this.state = {
    isLoading: true,
    firstName: '',
    lastName: '',
    email: '',
  }
}

componentDidMount(){
  this.unsubscribe = this.props.navigation.addListener('focus', () => {
    this.getInfo()
  });
}

componentWillUnmount(){
  this._unsubscribe();
}

getInfo = async () => {
  const ID = await AsyncStorage.getItem('@user_id');
  const id = JSON.parse(ID);
  const value = await AsyncStorage.getItem('@session_token');
  return fetch("http://10.0.2.2:3333/api/1.0.0/user/" + id, {
    'headers': {
      'Content-type': 'application/json',
      'X-Authorization': value
    }
  })

  .then((response) => {
    if(response.status === 200){
      return response.json()
    } else if(response.status === 401){
      throw 'Unauthorised';
    }
  })

.then((responseJson) => {
  this.setState({
    isLoading: false,
    firstName: responseJson.first_name,
    lastName: responseJson.last_name,
    email: responseJson.email,
  })
})

.catch((error) => {
  console.log(error);
  ToastAndroid.show(error, ToastAndroid.SHORT);
})

}

  render(){
    const navigation = this.props.navigation;
    return (
    <View>
      <ScrollView>
      <Text style={styles.title}>My Information:</Text>

    <Text style={styles.text}>{this.state.firstName}</Text>
    <Text style={styles.text}>{this.state.lastName}</Text>
    <Text style={styles.text}>{this.state.email}</Text>


      <TouchableOpacity onPress={() => navigation.navigate('Home')} >
        <Text style={styles.Button}>Go Back</Text>
      </TouchableOpacity>
      </ScrollView>
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
    fontSize: 30,
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
  },

  text:{
  fontSize: 20,
  marginLeft: 20,
  marginTop: 20
  }
});

export default MyAccount