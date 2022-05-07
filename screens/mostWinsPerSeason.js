import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';
// import DatePicker from 'react-native-datepicker';
// import SelectDropdown from 'react-native-select-dropdown'



export default function winsPerSeason({ navigation }) {

  const topTenPerSeason = useApi(apis.topTenPerSeason)

  
    const [data, setData] = useState('');

    useEffect(() => {
        topTenPerSeason.request().then((result)=>{
            console.log(result.body)
            if(result.body ==='[]')
              {Alert.alert("Error", "Please try again!")}
            else{
              setData(result.body)}
          })
    }, []);

    //   const onSubmit = () => {
    //     console.log("nationality ", nationality)

    //     topTenPerSeason.request().then((result)=>{
    //       console.log(result.body)
    //       if(result.body ==='[]')
    //         {Alert.alert("Error", "Please try again!")}
    //       else{
    //         setData(JSON.parse(result.body))}
    //     })
      
    //   }


      const renderItem = ({ item }) => {
        return (
          <View style={styles.item}>
            <View>
              <Text style={{ color: "#FFFFFF" , fontWeight: "bold", fontSize: 20 }}>
                Season: {item.season}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Most wins: {item.team}
              </Text>
              
            </View>


          </View>
        );
      };
    
    



    if(topTenPerSeason.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {topTenPerSeason.loading}/>
      </View> 
      )
    return (
        
        <View style={styles.container}>  
        <ScrollView style={styles.innerContainer}>


        {/* <Text style={styles.text}>Nationality :</Text>
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
 */}


        {/* <View style={styles.innerContainer}>   */}
        {/* <Button
            title={'search'}
            style={styles.buttonStyle}
            onPress={onSubmit}/> */}
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
        flex: 1,
        padding: 24,
        backgroundColor: 'black',
    },
    innerContainer: {
        flex: 1,
    },
      item: {
        backgroundColor: "#234B69",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
      },
})