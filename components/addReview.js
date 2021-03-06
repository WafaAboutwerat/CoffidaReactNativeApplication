import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {Text, View, StyleSheet, ToastAndroid, TextInput, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Rating, AirbnbRating} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';



class addReview extends Component {
    constructor(props){
        super(props);
     
        this.state = {
            overall_rating: 0,
            price_rating: 0,
            quality_rating: 0,
            clenliness_rating: 0,
            review_body: ""
        }
       }
     
     ratingCompleted(rating, name){
         let stateObject = () => {
             let returnObj = {};
             returnObj[name] = rating;
             return returnObj
         };
         this.setState(stateObject);
     }


addReview = async () => {
    let to_send = {
        overall_rating: this.state.overall_rating,
        price_rating: this.state.price_rating,
        quality_rating: this.state.quality_rating,
        clenliness_rating: this.state.clenliness_rating,
        review_body: this.state.review_body
      };
    const value = await AsyncStorage.getItem('@session_token')
    const loc_id = this.props.route.params.location_id;
    return fetch("http://10.0.2.2:3333/api/1.0.0/location/" + loc_id + '/review', {
        method: 'post',
        'headers':{
            'Content-type': 'application/json',
            'X-Authorization': value
        },
        body: JSON.stringify(to_send)
    })

.then((response) => {
    if(response.status === 201){
        Alert.alert("Your review has been added");
    } else if(response.status === 404){
        throw 'Not found'
    } else if(response.status === 401){
        throw 'Unauthorised'
    } else if(response.status === 400){
        throw 'bad request'
    } else if (response.status === 500){
        throw 'server error'
    }
})


.then((responseJson) => {
    this.props.navigation.navigate('Home');

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

       <Text style={styles.heading}>Add a review:</Text> 
        <ScrollView>
            <Text style={styles.title}>Overall rating:</Text>
            <AirbnbRating
            size={20}
            reviewSize={20}
            maxStars={5}
            defaultRating={0}
            onFinishRating={(rating) => this.ratingCompleted(rating, "overall_rating")}
            />

            <Text style={styles.title}>Price rating:</Text>
            <AirbnbRating
            size={20}
            reviewSize={20}
            maxStars={5}
            defaultRating={0}
            onFinishRating={(rating) => this.ratingCompleted(rating, "price_rating")}
            />

            <Text style={styles.title}>Quality rating:</Text>
            <AirbnbRating
            size={20}
            reviewSize={20}
            maxStars={5}
            defaultRating={0}
            onFinishRating={(rating) => this.ratingCompleted(rating, "quality_rating")}
            />

            <Text style={styles.title}>Clenliness:</Text>
            <AirbnbRating
            size={20}
            reviewSize={20}
            maxStars={5}
            defaultRating={0}
            onFinishRating={(rating) => this.ratingCompleted(rating, "clenliness_rating")}
            />

          <Text style={styles.title}>Comment:</Text>
          <TextInput
          placeholder="comment here"
          style={styles.commentBox}
          onChangeText={(review_body) => this.setState({review_body: review_body})}
          />

          <TouchableOpacity
          style={styles.button}
          onPress={() => this.addReview()}>
          <Text style={styles.text}>Add Review</Text>
          </TouchableOpacity>

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
    
    title: {
        marginLeft: 20,
        marginTop: 15,
        fontSize: 18, 
    },

    commentBox: {
        width: 350,
        height: 140,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 20,
        padding: 12,
        fontSize: 20
    },

    button: {
        width: 120,
        paddingTop: 10,
        paddingBottom: 12,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        borderRadius: 5,
        marginLeft: 40,
        marginBottom: 80,
        marginTop: 20,
        backgroundColor: '#03989e',
    },

    text: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    }

    });

export default addReview