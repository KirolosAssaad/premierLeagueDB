import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, FlatList, ScrollView, Button, ActivityIndicator, Linking } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';



export default function viewPlayer({ navigation }) {

  const viewPlayerAPI = useApi(apis.getPlayerInfo)

  
    const [name,setName] = useState('');
    const [data, setData] = useState('');


      const onSubmit = () => {
        // console.log("stadium ", stadium)

        viewPlayerAPI.request(name).then((result)=>{
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
        
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Name: {item.playerName}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Position: {item.playerPosition}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Nationality: {item.nationality}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Date Of Birth: {item.dateOfBirth}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Club: {item.clubName}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Season 2020: {item.season2020_2021}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Season 2019: {item.season2019_2020}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Season 2018: {item.season2018_2019}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Season 2017: {item.season2017_2018}
              </Text>

            </View>
          </View>
        );
      };
    
    



    if(viewPlayerAPI.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {viewPlayerAPI.loading}/>
      </View> 
      )
    return (
        
        <View style={styles.container}>  
            <Text style={styles.text}>Player Name :</Text>
            <TextInput
                value={name}
                onChangeText={(name) => {
                // if (stadium == "")
                //     {Alert.alert("No Input", "Stadium Name Can't have a NULL value")
                //     setStadium("")}
                // else
                setName(name)}}
                placeholder={'Player Name'}
                placeholderTextColor="darkgrey"
                style={styles.input}
            />

            <Button
                title={'search'}
                style={styles.buttonStyle}
                onPress={onSubmit}/>

            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}/>

        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'black',
    },
    text:{
        // flex: 1,
        color:'white',
        fontSize: 20,
        marginTop:10,
        fontWeight: 'bold',
    },

    input: {
        width: 200,
        height: 44,
        padding: 10,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor:'white',
        marginBottom: 20,
        marginTop:10,
        textShadowColor:"darkgrey"
      },

      item: {
        backgroundColor: "#234B69",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,

      },
})