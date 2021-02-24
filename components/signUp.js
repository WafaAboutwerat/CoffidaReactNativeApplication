import 'react-native-gesture-handler';
import React, {Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Button, Alert } from 'react-native';

import Header from './Header';



class signUp extends Component {

  constructor(props){
    super(props);

    this.state = {
      first_name:'',
      last_name: '',
      email: '',
      password: '',
     
    };
  }

     addUser(){
  let to_send = {
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email,
    password: this.state.password,
  };

  return fetch("http://10.0.2.2:3333/api/1.0.0/user",{
   method: 'post',
   headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify(to_send)
  })
 .then((response) => {
   Alert.alert("Account Created");
   this.getData();
 })
 .catch((error) => {
   console.log(error);
 })
}


  render(){
    const navigation = this.props.navigation; 
    return (
     <View style={styles.container}>
        <Header />
        <ScrollView>
        <Text style={styles.title}>SignUp for an account</Text>
        <TextInput style={styles.inputBox} placeholder='FirstName' onChangeText={(first_name) => this.setState({first_name})} value={this.state.firstName}/> 
        <TextInput style={styles.inputBox} placeholder='LastName' onChangeText={(last_name) => this.setState({last_name})} value={this.state.lastName}/>
        <TextInput style={styles.inputBox} placeholder='Email' onChangeText={(email) => this.setState({email})} value={this.state.email}/>
        <TextInput style={styles.inputBox} placeholder='Password' secureTextEntry={true} onChangeText={(password)  => this.setState({password})} value={this.state.password}/>
       
        <TouchableOpacity  onPress={() => this.addUser()}>
          <Text style={styles.buttonText}>SignUp</Text> 
        </TouchableOpacity>

        <TouchableOpacity
        
         onPress={() => navigation.navigate('login')}>
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
 
 
 buttonText: {
     fontSize: 22,
     color:'#03989e',
     marginTop: 20,
     textAlign: 'center'
    
 },
 
 buttontext: {
   fontSize: 18,
   color:'#545454',
   marginTop: 5,
   textAlign: 'center',
   marginBottom: 25
   
  
 },
 
 
 title: {
  fontSize: 27,
  color: '#03989e',
  textAlign: 'center',
  marginTop: 20

}
})


export default signUp