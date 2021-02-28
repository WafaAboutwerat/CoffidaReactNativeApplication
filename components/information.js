import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {Text, View, StyleSheet, ToastAndroid} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

class information extends Component {
  constructor(props){
   super(props);

   this.state = {
       isLoading: true,
       location_id: 0,
       location_name: '',
       location_town: '',
       avg_price_rating: '',
       avg_quality_rating: '',
       avg_clenliness_rating: ''
   }
  }

componentDidMount(){
    this.getData();
}


getData = async () => {
    const loc_id = this.props.route.params.location_id;
    return fetch("http://10.0.2.2:3333/api/1.0.0/location/" + loc_id, {
        'headers':{
            'Content-type': 'application/json'
        }
    })

.then((response) => {
    if(response.status === 200){
        return response.json()
    } else if(response.status === 404){
        throw 'Not found'
    }
})


.then((responseJson) => {
    this.setState({
        isLoading: false,
        location_name: responseJson.location_name,
        location_town: responseJson.location_town,
        avg_price_rating: responseJson.avg_price_rating,
        avg_quality_rating: responseJson.avg_quality_rating,
        avg_clenliness_rating: responseJson.avg_clenliness_rating
    });
})
.catch((error) => {
    console.log(error);
    ToastAndroid.show(error, ToastAndroid.SHORT);
})
}

render(){
    const navigation = this.props.navigation;
    return(
        <View>
        <ScrollView>
        <Text style={styles.title}>location information:</Text>
        
           <Text style={styles.name}>{this.state.location_name}</Text>
            <Text style={styles.info}>location: {this.state.location_town}</Text>
            <Text style={styles.info}>price rating: {this.state.avg_price_rating}</Text>
            <Text style={styles.info}>quality rating: {this.state.avg_quality_rating}</Text>
            <Text style={styles.info}>cleanliness: {this.state.avg_clenliness_rating}</Text>
            
        </ScrollView>
        </View>
    )
};

}

 const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eee'
       },

       title:{
        color: '#03989e' ,
        fontSize: 30,
        marginLeft: 20,
        marginTop: 20
        },

        info: {
            marginTop: 20,
            marginLeft: 10,
            fontSize: 15
        },
        name: {
            marginTop: 50,
            marginLeft: 10,
            fontSize: 20
        }
 })




export default information 