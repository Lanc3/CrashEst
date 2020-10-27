import React , { useState, useEffect } from 'react';
import {StyleSheet, View, Button, Text} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import ImageDetail from "../components/ImageDetail";
import ButtonStyle from "../components/ButtonStyle";

const HomeScreen = ({navigation}) => {

    const [ users, setUsers ] = useState([]);
    const retrieveSignUp = async () => {
        try {
            const value = await AsyncStorage.getItem('SignUpDetails')
            if (value !== null) {
                // We have data!!
                navigation.navigate('StartAScreen')
              }
              else{
               
              }
            } catch (error) {
                
                console.log("herere")
            }
    }
    
    useEffect( () => { retrieveSignUp(users) }, [ users ] );

     
  return <View style={styles.background}>
      <ImageDetail imageSource={require('../../assets/logo.png')}/>
      <ButtonStyle onClick={'SignUpScreen'} navi={navigation} text={'Welcome'}/>
  </View>
  
};



const styles = StyleSheet.create({
  background:{
    backgroundColor:'#3A3A3A',
    height:'100%'
  }
});

export default HomeScreen;
