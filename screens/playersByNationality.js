import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, FlatList, ScrollView, Button, ActivityIndicator } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';
// import DatePicker from 'react-native-datepicker';
// import SelectDropdown from 'react-native-select-dropdown'
import DatePicker from 'react-native-neat-date-picker'



export default function playersByNationality({ navigation }) {

  const getPlayerFromNationality = useApi(apis.getPlayerFromNationality)

  
    const [nationality,setNationality] = useState('');
    const [data, setData] = useState('');

    

      const onSubmit = () => {
        console.log("nationality ", nationality)

        getPlayerFromNationality.request(nationality).then((result)=>{
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
              <Text style={{ color: "#FFFFFF" , fontWeight: "bold", fontSize: 20 }}>
                {item.playerName}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Current Club name: {item.clubName}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Season 2020 Club: {item.season2020_2021}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Season 2019 Club: {item.season2019_2020}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Season 2018 Club: {item.season2018_2019}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Season 2017 Club: {item.season2017_2018}
              </Text>
              
            </View>


          </View>
        );
      };
    
    



    if(getPlayerFromNationality.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {getPlayerFromNationality.loading}/>
      </View> 
      )
    return (
        
        <View style={styles.container}>  
        <ScrollView style={styles.innerContainer}>


        <Text style={styles.text}>Nationality :</Text>
        <TextInput
            value={nationality}
            onChangeText={(nationality) => {
            if (nationality == "")
                {Alert.alert("No Input", "nationality Can't have a NULL value")
                setNationality("")}
            else
                setNationality(nationality)}}
            placeholder={'Nationality'}
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