import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, FlatList, ScrollView, Button, ActivityIndicator } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';
// import DatePicker from 'react-native-datepicker';
// import SelectDropdown from 'react-native-select-dropdown'
import DatePicker from 'react-native-neat-date-picker'



export default function viewReviews({ navigation }) {

  const viewReview = useApi(apis.viewReviews)

  
    const [date,setDate] = useState('');
    const [home,setHome] = useState('');
    const [away,setAway] = useState('');
    const [data, setData] = useState('');
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
    //   console.log(date.date)
    //   console.log(date.dateString)   
      setDate(date.dateString)
    }



      const onSubmit = () => {
        console.log("date ", date.replaceAll('-',''))
        console.log("date ", date.replaceAll('-',''))
        console.log("date ", date.replaceAll('-',''))
        console.log("home ", home)
        console.log("away ", away)

        viewReview.request(date.replaceAll('-',''), home, away).then((result)=>{
          console.log(result.body)
          if(result.body ==='[]')
            {Alert.alert("Error", "Please try again!")}
          else{
            setData(JSON.parse(result.body))}
        })
      
      }


      const renderItem = ({ item }) => {
        return (
          <View style={styles.item}>
            <View>
              <Text style={{ color: "#FFFFFF" }}>
                User: {item.username}{" "}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Rating: {item.rating}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Review: {item.txtRating}
              </Text>
            </View>


          </View>
        );
      };
    
    



    if(viewReview.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {viewReview.loading}/>
      </View> 
      )
    return (
        
        <View style={styles.container}>  
        <ScrollView style={styles.innerContainer}>
        <Text style={styles.text}>Match Date :</Text>

        {/* <DatePicker style={styles.datePickerStyle}
        mode={"date"}
        value = {date}

        onDateChange={(date)=>setDate(date)}
        /> */}

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

        {/* <View style={styles.innerContainer}>   */}
        <Button
            title={'search'}
            style={styles.buttonStyle}
            onPress={onSubmit}/>
        {/* </View>   */}


        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}

      />



        </ScrollView>
        </View>
  

      );
}

const styles = StyleSheet.create({
    container: {
    //   padding: 10,      
    //   position: 'absolute',
    flex: 1,
    padding: 24,
    backgroundColor: 'black',
    //   flex: 10,
    },
    text:{
    flex: 1,
        color:'white',
        fontSize: 20,
        marginTop:10,
        fontWeight: 'bold',
    },

      smallInput: {
    flex: 1,
        width: '100%',
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
      innerContainer: {
        flex: 1,

      },

      item: {
        // flex: 1,
        // flexDirection: "row",
        backgroundColor: "#234B69",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        // flexDirection: "row",
        // justifyContent: "space-between",
      },
})