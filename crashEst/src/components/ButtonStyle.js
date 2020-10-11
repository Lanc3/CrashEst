import React from "react";
import { StyleSheet ,Text,View,TouchableOpacity} from "react-native";

const ButtonStyle = ({text,navi,onClick}) => {

    

    const onPress = () =>{
        navi.navigate(onClick)
    };

    return <View style={styles.layout}>
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.textStyle} >{text}</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30,
      color:'white'
    },
    layout:{
        paddingTop:100
    },
    button: {
        alignItems: "center",
        backgroundColor: "#FF9933",
        padding: 10,
        margin:25,
        borderRadius:10,
        borderWidth:3,
        borderColor:'white'
      }
  });



export default ButtonStyle;
