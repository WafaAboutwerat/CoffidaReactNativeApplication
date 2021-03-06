import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {Text, View, StyleSheet, ToastAndroid, FlatList} from 'react-native';


class reviews extends Component {
    constructor(props){
        super(props);
     
        this.state = {
            isLoading: true,
            reviews: null,
            review_id: null
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
    } else if (response.status === 500){
        throw 'server error'
    }
})


.then((responseJson) => {
    this.setState({
        isLoading: false,
        reviews: responseJson.location_reviews

    });

    })

    .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
    })
    }

    render() {
        
        const navigation = this.props.navigation;
        return(
        <View>

       <Text style={styles.heading}>Reviews:</Text> 
        <FlatList 
              data={this.state.reviews}
              renderItem={({item})  => (
            <View style={styles.view}>
            <Text style={styles.review}>Overall rating: {item.overall_rating}</Text>
            <Text style={styles.review}>Price rating: {item.price_rating}</Text>
            <Text style={styles.review}>Quality rating: {item.quality_rating}</Text>
            <Text style={styles.review}>Cleanliness: {item.clenliness_rating}</Text>
            <Text style={styles.review}>Comment: {item.review_body}</Text>
            </View>
              )}
              keyExtractor={(item) => item.review_id.toString()}
           />
        </View>
        )
};
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eee'
       },

       heading: {
        color: '#03989e',
        marginTop: 20,
        fontSize: 20,
        marginLeft: 20
    },

    review: {
        marginTop: 10,
        fontSize: 15,
        marginLeft: 10
    },


    });

export default reviews