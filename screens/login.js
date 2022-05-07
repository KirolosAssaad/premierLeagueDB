import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image, ActivityIndicator } from 'react-native';
import * as apis from '../apis';
import { useApi } from '../useApi';
// import { Button } from 'react-native-web';

export default function Login({ navigation }) {

    const fetchUser = useApi(apis.getUser);
    const [username,setUser] = useState('');
  

    const onLogin = () =>{
        fetchUser.request(username)
        .then((result)=>{  
          if(result.body.length == 0)
            Alert.alert('Not Registered Username', `${username} doesn't exist`);
          else
            {
              console.log(result.body[0].username);
              navigation.navigate('Menu', {'user':result.body[0].username});
              
            }
        }).catch((err)=>{console.log("Error ",err);});
    };

    if(fetchUser.loading)
    return(
      <View style={styles.container}> 
      <ActivityIndicator loading = {fetchUser.loading}/>
      </View> 
      )
    return (
        <View style={styles.container}>
        <View style={styles.backgroundContainer}>
            <Image source = {require('../assets/blackbg.png')} resizeMode = 'cover' style = {{ width: 450, height: 350}} />
        </View>
            <Image style =  {styles.logo}  source = {require('../assets/logo.png')} />
  
          <TextInput
            value={username}
            onChangeText={(username) => setUser(username)}
            placeholder={'Username'}
            style={styles.input}
          />
          
          <Button
            title={'Login'}
            style={styles.input}
            onPress={onLogin}
          />

          <Button
            title={'Register New Account'}
            style={styles.input}
            onPress={() =>{navigation.navigate('registerUser');}}
          />
        </View>
  
      );
//   return (
//     <View style={styles.container}>
//       <Text>Login Screen</Text>
//       <Button title='LOGIN' onPress = {onLogin}/>
//     </View>
//   );
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//   },
// });

const styles = StyleSheet.create({
    backgroundContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    logo: {
      width: 120, 
      height: undefined, 
      aspectRatio: 1.2/2, 
      tintColor:"#FFFFFF", 
      marginTop:50
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      flexDirection: 'column',
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 20,
      marginTop:100
    },
  });
  