import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, ToastAndroid, Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class edit extends Component {
  constructor(props){
      super(props)

      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
  }

updateFirstName = async () => {
  let to_send = {
    first_name: this.state.firstName
  };

  const ID = await AsyncStorage.getItem('@user_id');
  const id = JSON.parse(ID);
  const value = await AsyncStorage.getItem('@session_token');
  return fetch("http://10.0.2.2:3333/api/1.0.0/user/" + id,{
    method: 'patch',
    headers: {
    'Content-type': 'application/json',
    'X-Authorization':value
    },

     body:JSON.stringify(to_send)

  }) 

  .then((response) => {
    Alert.alert("firstName has been updated");
  })

  .catch ((error) => {
    console.log(error);
    ToastAndroid.show(error, ToastAndroid.SHORT);
  })
}


updateLastName = async () => {
  let to_send = {
    last_name: this.state.lastName
  };

  const ID = await AsyncStorage.getItem('@user_id');
  const id = JSON.parse(ID);
  const value = await AsyncStorage.getItem('@session_token');
  return fetch("http://10.0.2.2:3333/api/1.0.0/user/" + id,{
    method: 'patch',
    headers: {
    'Content-type': 'application/json',
    'X-Authorization':value
    },

     body:JSON.stringify(to_send)

  }) 

  .then((response) => {
    Alert.alert("lastName has been updated");
  })

  .catch ((error) => {
    console.log(error);
    ToastAndroid.show(error, ToastAndroid.SHORT);
  })
}


updateEmail = async () => {
  let to_send = {
    email: this.state.email
  };

  const ID = await AsyncStorage.getItem('@user_id');
  const id = JSON.parse(ID);
  const value = await AsyncStorage.getItem('@session_token');
  return fetch("http://10.0.2.2:3333/api/1.0.0/user/" + id,{
    method: 'patch',
    headers: {
    'Content-type': 'application/json',
    'X-Authorization':value
    },

     body:JSON.stringify(to_send)

  }) 

  .then((response) => {
    Alert.alert("email has been updated");
  })

  .catch ((error) => {
    console.log(error);
    ToastAndroid.show(error, ToastAndroid.SHORT);
  })
}

updatePassword = async () => {
  let to_send = {
    password: this.state.password
  };

  const ID = await AsyncStorage.getItem('@user_id');
  const id = JSON.parse(ID);
  const value = await AsyncStorage.getItem('@session_token');
  return fetch("http://10.0.2.2:3333/api/1.0.0/user/" + id,{
    method: 'patch',
    headers: {
    'Content-type': 'application/json',
    'X-Authorization':value
    },

     body:JSON.stringify(to_send)

  }) 

  .then((response) => {
    Alert.alert("password has been updated");
  })

  .catch ((error) => {
    console.log(error);
    ToastAndroid.show(error, ToastAndroid.SHORT);
  })
}

render(){
    return(
      <View>
        <ScrollView>
           <Text style={styles.text}>Edit informatin:</Text>
           <TextInput  style={styles.inputBox} placeholder= 'firstName' onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName}/>
           <TouchableOpacity onPress={() => this.updateFirstName()}>
              <Text style={styles.updateButton}>update</Text></TouchableOpacity>
           <TextInput style={styles.inputBox} placeholder= 'lastName' onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName}/>
           <TouchableOpacity onPress={() => this.updateLastName()}>
             <Text style={styles.updateButton}>update</Text></TouchableOpacity>
           <TextInput  style={styles.inputBox} placeholder= 'email' onChangeText={(email) => this.setState({email})} value={this.state.email}/>
           <TouchableOpacity onPress={() => this.updateEmail()}>
             <Text style={styles.updateButton}>update</Text></TouchableOpacity>
           <TextInput  style={styles.inputBox} placeholder= 'password' onChangeText={(password) => this.setState({password})} value={this.state.password}/>
           <TouchableOpacity onPress={() => this.updatePassword()}>
             <Text style={styles.updateButton}>update</Text></TouchableOpacity>
        </ScrollView>
      </View>

    );
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee'
    },
    text:{
        color: '#03989e' ,
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20
        },
        inputBox:{
          width: 300,
          height:60,
          backgroundColor: '#ffffff',
          paddingHorizontal: 16,
          fontSize: 16,
          marginVertical: 10,
          marginLeft: 50,
          marginTop: 20
        },
        updateButton:{
          fontSize: 18,
          color:'#545454',
          marginTop: 5,
          textAlign: 'center',
        }
     });
    
     export default edit