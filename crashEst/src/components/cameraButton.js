import React, { useState, useEffect } from 'react';
import { StyleSheet ,Image,View,TouchableOpacity, Text} from "react-native";
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const cameraButton = ({navi}) => {

    const [hasPermission, setHasPermission] = useState(null);
  
    
    const onPress = () =>{
        navi.navigate('PhotoTwoScreen');
    };

    return <View style={styles.layout}>
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.slection}>
            <FontAwesome style={styles.plus} icon={SolidIcons.camera} />
            </View>
            
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30,
      color:'white'
    },
    layout:{
        paddingTop:50
    },
    button: {
        alignItems: "center",
        backgroundColor: "#FF9933",
        padding: 10,
        margin:25,
        borderRadius:10,
        borderWidth:3,
        borderColor:'white'
      },
    slection:{
      borderRadius:40,
      width:200,
      height:200,
      borderColor:'#FF9933',
      borderWidth:2
  },
  plus:{
     color: "#FF9933",
      fontSize: 100,
      alignSelf:'center',
      paddingTop:40
      
  }
  });



export default cameraButton;
