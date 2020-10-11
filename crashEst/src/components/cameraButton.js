import React, { useState, useEffect } from 'react';
import { StyleSheet ,Image,View,TouchableOpacity} from "react-native";
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

const cameraButton = ({navi}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            
          setHasPermission(status === 'granted');
        })();
      }, []);
    
    const onPress = () =>{
        navi.navigate('PhotoTwo');
    };
    if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    return <View style={styles.layout}>
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.slection}>
            <FontAwesome
                name="plus"
                style={styles.plus}
            />
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
      paddingTop:50
      
  }
  });



export default cameraButton;
