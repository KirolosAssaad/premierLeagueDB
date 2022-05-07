import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function Menu({ route, navigation }) {

    const options = [
        {choice: 'add Review', key: 1},
        {choice: 'view Reviews', key: 2},
        {choice: 'Players from a nationality', key: 3},
        {choice: 'Most Wins per season', key: 4},
        {choice: 'Top 10', key: 5},
        {choice: 'View Team', key: 6},
        {choice: 'View Player', key: 7},
        {choice: 'Team using Stadium', key: 8},
        {choice: 'Players from Position', key: 9},
        {choice: 'Teams from a City', key: 10},
    ]

    const onItemPick = (key) => {
        console.log(key)
        if (key == 1)
        {
            navigation.navigate('addReview', {user:navigation.getParam('user')});
        }
        else if (key == 2)
        {
            navigation.navigate('viewReviews', {user:navigation.getParam('user')});
        }
        else if (key == 3)
        {
            navigation.navigate('playersByNationality', {user:navigation.getParam('user')});
        }
        else if (key == 4)
        {
            navigation.navigate('winsPerSeason', {user:navigation.getParam('user')});
        }
        else if (key == 5)
        {
            navigation.navigate('topTen', {user:navigation.getParam('user')});
        }
        else if (key == 6)
        {
            navigation.navigate('viewTeam', {user:navigation.getParam('user')});
        }
        else if (key == 7)
        {
            navigation.navigate('viewPlayer', {user:navigation.getParam('user')});
        }
        else if (key == 8)
        {
            navigation.navigate('teamFromStadium', {user:navigation.getParam('user')});
        }
        else if (key == 9)
        {
            navigation.navigate('playerFromPosition', {user:navigation.getParam('user')});
        }
        else if (key == 10)
        {
            navigation.navigate('teamFromCity', {user:navigation.getParam('user')});
        }
        // console.log(navigation.getParam('user'))
    }

    return (
    
    <View style={styles.container}>
        <FlatList
        numColumns={2}
        data = {options}
        renderItem = {({ item }) => (
            <TouchableOpacity style={styles.item} onPress= {() => onItemPick(item.key)}>
            <Text style={styles.text} >{item.choice}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'black',
  },
  item:{
    flex: 1, 
    margin: 5, 
    backgroundColor: 'cornflowerblue', 
    height: 130,
    alignContent:'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 15,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 20,
    fontWeight:'bold'
  },
  text:{
    flex: 1, 
    margin: 5, 
    textAlign: 'center',
    textAlignVertical: 'center',
    // padding: 15,
    fontSize: 20,
    fontWeight:'bold'
  },
  flatlist:{
    flexDirection: 'column',
  },

});