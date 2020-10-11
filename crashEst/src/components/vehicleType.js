import React , { useState, useEffect } from 'react';
import { Image , StyleSheet, View,Text, Button, TouchableOpacity} from "react-native";

const VehicleType = ({sourceImage,navi}) => {
    let source ;
    let selectedImage;
    let type;
    if(sourceImage === 'Car')
    {
        source = require('../../assets/carwhite.png');
        selectedImage = require('../../assets/carblue.png');
        type = 'Car';
    }
    else if (sourceImage === 'Truck')
    {
        source = require('../../assets/truckwhite.png');
        selectedImage = require('../../assets/truckblue.png');
        type = 'Truck';
    }
    else if (sourceImage === 'Van')
    {
        source = require('../../assets/suvvanwhite.png');
        selectedImage = require('../../assets/suvvanblue.png');
        type = 'Van';
    }
    else if (sourceImage === 'Other')
    {
        source = require('../../assets/otherwhite.png');
        selectedImage = require('../../assets/otherblue.png');
        type = 'Other';
    }

    const onPress = () =>{
        console.log(type)
        navi.navigate('PickArea',{VehicleData:type});
    };

    return <View style={styles.layout}>
        <TouchableOpacity
            onPress={onPress}
        >
            <Image style={styles.slection} source={source} />
        </TouchableOpacity>
        
    </View>
};



const styles = StyleSheet.create({
  background:{
    backgroundColor:'#3A3A3A'
  },
  slection:{
      borderRadius:40,
      width:150,
      height:150,
      borderColor:'#FF9933',
      borderWidth:2
  }
});

export default VehicleType;
