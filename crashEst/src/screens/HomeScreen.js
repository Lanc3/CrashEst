import React , { useState, useEffect } from 'react';
import { AsyncStorage , StyleSheet, View, Button, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail"
import ButtonStyle from "../components/ButtonStyle"



const HomeScreen = ({navigation}) => {

    const [ users, setUsers ] = useState([]);
    const retrieveSignUp = async () => {
        try {
            const value = await AsyncStorage.getItem('SignUpDetails')
            if (value !== null) {
                // We have data!!
                console.log(value)
                navigation.navigate('StartA')
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
      <ButtonStyle onClick={'SignUp'} navi={navigation} text={'Welcome'}/>
  </View>
  
};



const styles = StyleSheet.create({
  background:{
    backgroundColor:'#3A3A3A',
    height:'100%'
  }
});

export default HomeScreen;
