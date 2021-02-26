import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



class Settings extends Component {

logout = async () => {
  let token = await AsyncStorage.getItem('@session_token');
  await AsyncStorage.removeItem('@session_token');
  return fetch("http://10.0.2.2:3333/api/1.0.0/user/logout", {
    method: 'post',
    headers: {
      "X-Authorization": token
    }
  })
  .then((response) => {
    if(response.status === 200){
      this.props.navigation.navigate("login");
    }else  {
      throw 'something went wrong'
    }
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
      <TouchableOpacity onpress={() => this.logout()} >
      <Text style={styles.buttontext}>Click here to logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} >
        <Text style={styles.Button}>Go Back</Text>
      </TouchableOpacity>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#eee'
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

  buttontext: {
    fontSize: 30,
    color:'#03989e',
    marginTop: 100,
    textAlign: 'center'
   
},
});

export default Settings