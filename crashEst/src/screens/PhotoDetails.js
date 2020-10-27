import React , { useState, useEffect } from 'react';
import { FlatList , StyleSheet, View, Image, TouchableOpacity, Text} from "react-native";
import VehicleType from "../components/vehicleType"

const PhotoDetails = ({route,navigation}) => {
    const onPress = (dest) =>{
        navigation.navigate(dest);
    };
     const photos = route.params.imageArray;
     console.log(photos)

  return <View style={styles.background}>
      <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Confirm Selected Photos</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Step 4 of 6</Text>
      </View>
      </View>
     
      <View style={styles.contains}>
      <FlatList 
                vertical
                data={photos}
                keyExtractor={(photos) => photos.toString()}
                renderItem={({item}) => (
                    <View style={styles.photoContainer}>
                        <Image style={styles.flairImage} source={{uri:item}}></Image>
                    </View>
                    
                )}
            />
      </View>
      
      <View style={styles.footer}>
    <TouchableOpacity
            style={styles.button}
            onPress={() => onPress('PhotoTwo')}
        >
            <Text style={styles.textStyle} >Retake Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={ () => onPress('ClaimantDetailsScreen',{photoArray:photos})}
        >
            <Text style={styles.textStyle} >Continue</Text>
        </TouchableOpacity>
    </View>
  </View>
  
};



const styles = StyleSheet.create({
  background:{
    backgroundColor:'#3A3A3A',
    height:'100%',
    justifyContent:"center"
  },
  flairImage: {
    width:'90%',
    height:200,
    margin:5,
    alignSelf:'center',
    borderRadius:40,
    borderWidth:2,
    borderColor:'#FF9933'
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
photoContainer:{
    justifyContent:'center',
    alignContent:'center'
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
      justifyContent:'center',
      paddingTop:6
  },
  contains:{
      flex:3
  },
  header:{
      flex:1
  },
  footer:{
      flex:2
  }
});

export default PhotoDetails;
