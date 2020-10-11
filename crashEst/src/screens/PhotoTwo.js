import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity ,StyleSheet} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

export default function PhotoTwo({navigation}) {
    const [photoCount, setPhotoCount] = useState(0);
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
          
      },
      text:{
        color:'#FF9933',
        fontSize:40,
        justifyContent:"center",
        flexDirection:'row'
      },
      textContainer:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:30
    }
      });

    const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraRoll, setCameraRoll] = useState([]);
  const [type, setType] = useState(Camera.Constants.Type.back);useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {setCameraRef(ref);}}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{photoCount}/5</Text>
          </View>
      
        <View
          style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:20}}>
              
            <TouchableOpacity
                style={{
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'transparent',                  
                    }}>
                <Ionicons
                name="ios-photos"
                style={{ color: "#FF9933", fontSize: 40}}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                }}
                    onPress={async() => {
                    if(cameraRef){
                        let photo = await cameraRef.takePictureAsync();
                        //console.log('photo', photo);
                        let n = photoCount;
                        n++;
                        
                        setPhotoCount(n);
                        let arryRoll = cameraRoll;
                        arryRoll.push(photo)
                        setCameraRoll(arryRoll);
                        if(n > 4){
                            navigation.navigate('PhotoDetails',{imageArray:arryRoll});
                        }
                    }
                }}
            >
            <FontAwesome
                name="camera"
                style={{ color: "#FF9933", fontSize: 60}}
            />
            </TouchableOpacity>

            <TouchableOpacity
            style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <MaterialCommunityIcons name="camera-switch"
                style={{ color: "#FF9933", fontSize: 40}}
            />
          </TouchableOpacity>
          
        </View>
      </Camera>
    </View>
  );



}

