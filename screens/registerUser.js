import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Keyboard, ScrollView, Button, ActivityIndicator } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';
import SelectDropdown from 'react-native-select-dropdown'
import DatePicker from 'react-native-neat-date-picker'



export default function registerUser({ navigation }) {

    const options = [
        'M',
        'F'
    ]

  const registerUserAPI = useApi(apis.registerUser);
  
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [birthdate,setBirthDate] = useState('');
    const [gender,setGender] = useState('');
    const [favoriteClub,setFavoriteClub] = useState('');
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
      setBirthDate(date.dateString)
    }



      const onSubmit = () => {
        console.log("username ", username)
        console.log("Birthdate ", birthdate.replaceAll('-',''))
        console.log("email ",email)
        console.log("gender ", gender)
        console.log("favoriteClub ", favoriteClub)

        registerUserAPI.request(username, email, gender, birthdate.replaceAll('-',''), favoriteClub).then((result)=>{
          console.log(result.body)
          if(result.body.length ===0)
            {Alert.alert("Succesful", "New User Added!")
            navigation.navigate('Menu', {'user':username}) }
          else{
            console.log(result)
            Alert.alert("Error", "Please try again!")}
        })
      
      }
    if(registerUserAPI.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {registerUserAPI.loading}/>
      </View> 
      )
    return (
        
        <ScrollView style={styles.container}>  
        {/* <ScrollView> */}
        <Text style={styles.text}>Username :</Text>
        <TextInput
            value={username}
            onChangeText={(username) => {
                setUsername(username)}}
            placeholder={'Username'}
            style={styles.smallInput}
          />

        <Text style={styles.text}>Email :</Text>
        <TextInput
            value={email}
            onChangeText={(email) => {
                setEmail(email)}}
            placeholder={'Email'}
            style={styles.smallInput}
          />
        <Text style={styles.text}>Birthdate :</Text>


            <Button title={'open'} onPress={openDatePicker}/>
            <DatePicker
            isVisible={showDatePicker}
            mode={'single'}
            onCancel={onCancel}
            onConfirm={onConfirm}
            />
        <Text style={styles.text}>Gender :</Text>
        <Text style={styles.text}></Text>

        <SelectDropdown
            data={options}
            keyExtractor={(item) => item.id}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                if(index === 0)
                    setGender('M')
                else if (index === 1)
                    setGender('F')
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        /> 
    <Text style={styles.text}>Favorite Club :</Text>
        <TextInput
            value={favoriteClub}
            onChangeText={(favoriteClub) => {
                setFavoriteClub(favoriteClub)}}
            placeholder={'Favorite Club'}
            style={styles.smallInput}
          />

        <Button
            title={'Register'}
            style={styles.buttonStyle}
            onPress={onSubmit}/>

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
      smallInput: {
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

      buttonStyle: {
        width:200
      },
})