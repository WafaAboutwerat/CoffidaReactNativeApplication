import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './Header';

class login extends Component {

  constructor(props){
    super(props);

    this.state = {
     email: "",
     password: ""
    }
  }
logIn = async () => {

return fetch("http://10.0.2.2:3333/api/1.0.0/user/login", {

method: 'post',
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify(this.state)
})

.then((response) => {
  if(response.status === 200){
    return response.json()
  } else if(response.status === 400) {
    throw 'Invalid email or password';
} else{
  throw 'Somthing went wrong';
}

})
.then(async (responseJson) => {
  console.log(responseJson);
  await AsyncStorage.setItem('@session_token', responseJson.token);
  await AsyncStorage.setItem('@user_id',JSON.stringify(responseJson.id));
  this.props.navigation.navigate("DrawNav");
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
          <ScrollView>
          <TextInput style={styles.inputBox} placeholder='Email' onChangeText={(email) => this.setState({email})} value={this.state.email}/>
          <TextInput style={styles.inputBox} placeholder='Password' secureTextEntry={true} onChangeText={(password)  => this.setState({password})} value={this.state.password}/>

          <TouchableOpacity  onPress={() => this.logIn()}>
            <Text style={styles.buttontext}>login</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
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
 
 
 buttontext: {
   fontSize: 18,
   color:'#545454',
   marginTop: 5,
   textAlign: 'center',
  
  
 }
 
 


})


export default login 