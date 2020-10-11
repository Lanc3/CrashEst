import React from "react";
import { StyleSheet ,View,Image} from "react-native";

const ImageDetail = ({imageSource}) => {
    return <View style={styles.layout}>
        <Image style={styles.logo} source={imageSource} />
    </View>
};
const styles = StyleSheet.create({
    text: {
      fontSize: 30
    },
    layout:{
        justifyContent:'center',
        backgroundColor:'#3A3A3A',
        paddingTop:250
    },
    logo: {
        transform: [{ scale: 2 }],
        alignSelf:'center'
    }
  });



export default ImageDetail;
