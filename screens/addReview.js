import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Keyboard, ScrollView, Button, ActivityIndicator } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';
// import DatePicker from 'react-native-datepicker';
// import SelectDropdown from 'react-native-select-dropdown'
import DatePicker from 'react-native-neat-date-picker'



export default function addReview({ navigation }) {

  const postReview = useApi(apis.addReview);
  
    const [rating,setRating] = useState('');
    const [review,setReview] = useState('');
    const [date,setDate] = useState('');
    const [home,setHome] = useState('');
    const [away,setAway] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false)

    const openDatePicker = () => {
      setShowDatePicker(true)
    }
  
    const onCancel = () => {
      // You should close the modal in here
      setShowDatePicker(false)
    }
  
    const onConfirm = ( date ) => {
      // You should close the modal in here
      setShowDatePicker(false)
      
      // The parameter 'date' is a Date object so that you can use any Date prototype method.
      console.log(date.date)
      console.log(date.dateString)   
      setDate(date.dateString)
    }



      const onSubmit = () => {
        console.log("username ", navigation.getParam('user'))
        console.log("date ", date.replaceAll('-',''))
        console.log("rating ",rating)
        console.log("review ", review)
        console.log("home ", home)
        console.log("away ", away)

        postReview.request(navigation.getParam('user'), rating, review, date.replaceAll('-',''), home, away).then((result)=>{
          console.log(result.body)
          if(result.body.length ===0)
            {Alert.alert("Succesful", "Review Posted Successfully!")
            navigation.goBack() }
          else{
            console.log(result)
            Alert.alert("Error", "Please try again!")}
        })
      
      }
    if(postReview.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {postReview.loading}/>
      </View> 
      )
    return (
        
        <ScrollView style={styles.container}>  
        <Text style={styles.text}>Match Date :</Text>

      <Button title={'open'} onPress={openDatePicker}/>
      <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />

        <Text style={styles.text}>Home Team :</Text>
        <TextInput
            value={home}
            onChangeText={(home) => {
            if (home == "")
                {Alert.alert("No Input", "Home Can't have a NULL value")
                setHome("")}
            else
                setHome(home)}}
            placeholder={'home team'}
            style={styles.smallInput}
          />

        <Text style={styles.text}>Away Team :</Text>
        <TextInput
            value={away}
            onChangeText={(away) => {
            if (away == "")
                {Alert.alert("No Input", "Away Can't have a NULL value")
                setAway("")}
            else
                setAway(away)}}
            placeholder={'away team'}
            style={styles.smallInput}
          />

        <Text style={styles.text}>Rating</Text>
          <TextInput
            value={rating}
            onChangeText={(rating) => {
            if (rating <1 || rating > 10)
                {Alert.alert("Out of Range", `${rating} is out of range\n Rating should be between 1 and 10`)
                setRating("")}
            else
                setRating(rating)}}
            placeholder={'1 - 10'}
            keyboardType= 'number-pad'
            style={styles.numInput}
          />


        <Text style={styles.text}>Review</Text>
          <TextInput

            value={review}
            onChangeText={(review) => setReview(review)}
            placeholder={'type your review here'}
            numberOfLines = {3}
            multiline={true}
            onSubmitEditing={()=>{Keyboard.dismiss()}}
            style={styles.input}
          />


        <View style={styles.innerContainer}>  

        <Button
            title={'Login'}
            style={styles.buttonStyle}
            onPress={onSubmit}/>
        </View>  
        </ScrollView>
  

      );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,      
      backgroundColor: 'black',
      flex: 1,

    },
    text:{
        color:'white',
        fontSize: 20,
        marginTop:10,
        fontWeight: 'bold',
    },
    numInput: {
        width: 100,
        height: 44,
        padding: 10,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        marginTop:10,
        backgroundColor:'white',
        fontSize: 15,
        fontWeight: 'bold',
      },
      input: {
        width: 300,
        height: 132,
        padding: 10,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        marginTop:10,
        backgroundColor:'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlignVertical: 'top'
      },
      smallInput: {
        width: 200,
        height: 44,
        padding: 10,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        marginTop:10,
        backgroundColor:'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlignVertical: 'top'
      },
      datePickerStyle: {
        width: 230,
        backgroundColor: 'white',
        marginTop:10,
      },

      buttonStyle: {
        width:200
      },
      innerContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom:100,
        left: -15,
      },
})