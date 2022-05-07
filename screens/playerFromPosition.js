import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, FlatList, ScrollView, Button, ActivityIndicator, Linking } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';



export default function playerFromPosition({ navigation }) {

  const getPlayerByPosition = useApi(apis.getPlayerByPosition)

  
    const [position,setPosition] = useState('');
    const [data, setData] = useState('');


      const onSubmit = () => {
        // console.log("stadium ", stadium)

        getPlayerByPosition.request(position).then((result)=>{
          // console.log(result.body)
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
              <Text style={{ color: "#FFFFFF", fontSize: 20, lineHeight: 30 }} >
                Club: {item.clubName}
              </Text>
            </View>
          </View>
        );
      };
    
    



    if(getPlayerByPosition.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {getPlayerByPosition.loading}/>
      </View> 
      )
    return (
        
        <View style={styles.container}>  
            <Text style={styles.text}>Position :</Text>
            <TextInput
                value={position}
                onChangeText={(position) => {
                // if (stadium == "")
                //     {Alert.alert("No Input", "Stadium Name Can't have a NULL value")
                //     setStadium("")}
                // else
                setPosition(position)}}
                placeholder={'positiion'}
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
        padding: 10,
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