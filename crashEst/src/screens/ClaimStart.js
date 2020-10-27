import React , { useState, useEffect } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text} from "react-native";
import VehicleType from "../components/vehicleType"

const ClaimStart = ({navigation}) => {

     
  return <View style={styles.background}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Step 1 of 6</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Please select a vehicle type.</Text>
      </View>
      
      <View style={styles.vehicleSelection}>
        <VehicleType navi = {navigation} sourceImage="Car"/>
        <VehicleType navi = {navigation}  sourceImage="Truck"/>
      </View>

      <View style={styles.vehicleSelection}>
        <VehicleType navi = {navigation}  sourceImage="Van"/>
        <VehicleType navi = {navigation}  sourceImage="Other"/>
      </View>

  </View>
  
};



const styles = StyleSheet.create({
  background:{
    backgroundColor:'#3A3A3A',
    height:'100%',
    justifyContent:"center"
  },
  vehicleSelection:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:20
  },
  text:{
    color:'#FF9933',
    fontSize:20,
    justifyContent:"center",
    flexDirection:'row',
    paddingLeft:0
  },
  textContainer:{
      flexDirection:'row',
      justifyContent:'center'
  }
});

export default ClaimStart;
