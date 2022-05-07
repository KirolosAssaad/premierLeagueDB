import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, FlatList, ScrollView, Button, ActivityIndicator, Linking } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';



export default function teamFromStadium({ navigation }) {

  const getTeamFromStadium = useApi(apis.getTeamFromStadium)

  
    const [stadium,setStadium] = useState('');
    const [data, setData] = useState('');


      const onSubmit = () => {
        // console.log("stadium ", stadium)

        getTeamFromStadium.request(stadium).then((result)=>{
        //   console.log(result.body)
          if(result.body ==='[]')
            {Alert.alert("Error", "Please try again!")}
          else{
            setData(result.body)}
        })
      
      }


      const renderItem = ({ item }) => { 
        return (
          <View style={styles.item}>
            <View>
        
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight:'bold', lineHeight: 30 }}>
                Club: {item.clubName}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 20, lineHeight: 30 }} onPress={() => Linking.openURL(item.website)}>
                Click here to open club's website
              </Text>
            </View>
          </View>
        );
      };
    
    



    if(getTeamFromStadium.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {getTeamFromStadium.loading}/>
      </View> 
      )
    return (
        
        <View style={styles.container}>  
            <Text style={styles.text}>Stadium Name :</Text>
            <TextInput
                value={stadium}
                onChangeText={(stadium) => {
                // if (stadium == "")
                //     {Alert.alert("No Input", "Stadium Name Can't have a NULL value")
                //     setStadium("")}
                // else
                setStadium(stadium)}}
                placeholder={'Stadium Name'}
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