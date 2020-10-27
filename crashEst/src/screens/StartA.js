import React , { useState, useEffect } from 'react';
import { AsyncStorage , StyleSheet, View, Button, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail"
import ButtonStyle from "../components/ButtonStyle";

 
const StartA = ({navigation}) => {
    //console.log(RNSmtpMailer)
     
  return <View style={styles.background}>
      
      <ImageDetail imageSource={require('../../assets/logo.png')}/>
      <ButtonStyle onClick={'ClaimantDetailsScreen'} navi={navigation} text={'Get Estimate'}/>
  </View>
  
};



const styles = StyleSheet.create({
  background:{
    backgroundColor:'#3A3A3A',
    height:'100%'
  }
});

export default StartA;
