import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, FlatList, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';
import SelectDropdown from 'react-native-select-dropdown'


export default function topTen({ navigation }) {

  const topTenFouls = useApi(apis.topTenFouls)
  const topTenHomeMatches = useApi(apis.topTenHomeMatches)
  const topTenMatches = useApi(apis.topTenMatches)
  const topTenShots = useApi(apis.topTenShots)
  const topTenYellowCards = useApi(apis.topTenYellowCards)

  const options = [
    'Fouls',
    'Wins', 
    'Home Wins',
    'Shots', 
    'Yellow Cards',
]
const nums = [
{num: '1. ', key: 1},
{num: '2. ', key: 2},
{num: '3. ', key: 3},
{num: '4. ', key: 4},
{num: '5. ', key: 5},
{num: '6. ', key: 6},
{num: '7. ', key: 7},
{num: '8. ', key: 8},
{num: '9. ', key: 9},
{num: '10.', key: 10},]
  
    const [data, setData] = useState([]);
    const [wins, setWins] = useState([]);
    const [homeWins, setHomeWins] = useState([]);
    const [yellowCards, setYellowCards] = useState([]);
    const [fouls, setFouls] = useState([]);
    const [shots, setShots] = useState([]);

    useEffect(() => {
        topTenFouls.request().then((result)=>{
            console.log(result.body)
            if(result.body ==='[]')
              {Alert.alert("Error", "Please try again!")}
            else{
              setFouls(result.body)}
          })


          topTenHomeMatches.request().then((result)=>{
            if(result.body ==='[]')
              {Alert.alert("Error", "Please try again!")}
            else{
              setHomeWins(result.body)}
          })

          topTenMatches.request().then((result)=>{
            if(result.body ==='[]')
              {Alert.alert("Error", "Please try again!")}
            else{
              setWins(result.body)}
          })

          topTenShots.request().then((result)=>{
            if(result.body ==='[]')
              {Alert.alert("Error", "Please try again!")}
            else{
              setShots(result.body)}
          })

          topTenYellowCards.request().then((result)=>{
            if(result.body ==='[]')
              {Alert.alert("Error", "Please try again!")}
            else{
              setYellowCards(result.body)}
          })
    }, []);


      const renderItem = ({ item }) => {
        return (
          <View style={styles.item}>
            <View>
              <Text style={{ color: "#FFFFFF" , fontWeight: "bold", fontSize: 20 }}>
                {item.team}
              </Text>
            </View>
          </View>
        );
      };
    
    
      const renderItem2 = ({ item }) => {
          if(data !=[])
        return (
          <View style={styles.item2}>
            <View>
              <Text style={{ color: "#FFFFFF" , fontWeight: "bold", fontSize: 20 }}>
                {item.num}
              </Text>
            </View>
          </View>
        );
      };
    
    


    if(topTenFouls.loading && topTenHomeMatches.loading && topTenYellowCards.loading && topTenMatches.loading && topTenShots.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {topTenFouls.loading && topTenHomeMatches.loading && topTenYellowCards.loading && topTenMatches.loading && topTenShots.loading}/>
      </View> 
      )
    return (
        
        <ScrollView style={styles.container}>
            <SelectDropdown
            data={options}
            keyExtractor={(item) => item.id}

            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                if(index === 0)
                    setData(fouls)
                else if (index === 1)
                    setData(wins)
                else if (index === 2)
                    setData(homeWins)
                else if (index === 3)
                    setData(shots)
                else if (index === 4)
                    setData(yellowCards)
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

        <SafeAreaView style={styles.innerContainer}>  

            <FlatList
            data={nums}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id}/>

            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}/>
        </SafeAreaView>

    </ScrollView>

);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'black',
    },
      innerContainer: {
        flex: 0.4,
        flexDirection:'row',
      },
      item: {
        backgroundColor: "#234B69",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
      },
      item2: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
      },
})
