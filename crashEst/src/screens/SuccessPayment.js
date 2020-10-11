import React ,{Component}from 'react';
import {View ,Text, TextInput,StyleSheet,TouchableHighlight} from'react-native';
import ImageDetail from "../components/ImageDetail"
import ButtonStyle from "../components/ButtonStyle"

export default class SuccessPayment extends Component {

    constructor({props,navigation}) {
      super(props);
      this._onPressButton = this._onPressButton.bind(this);
      this.navigation = navigation;
    }
  
  
    _onPressButton() {
      
    }
  
    
    render() {
        return (
            <View style={styles.background}>
      
            <ImageDetail imageSource={require('../../assets/logo.png')}/>
            <View style={styles.textContainer}>
        <Text style={styles.text}>Payment Successful</Text>
      </View>
            <ButtonStyle onClick={'StartA'} navi={this.navigation} text={'Back to Home'}/>
        </View>
        );
    }
  }
  
  const styles = StyleSheet.create({
      parentStyle:{
          borderWidth:3,
          borderColor: 'black',
          height :200,
          flexDirection: 'row',
          justifyContent : 'space-between'
      },
      viewOneStyle:{
          height: 50,
          width: 50,
          backgroundColor: 'green'
      },
      viewTwoStyle:{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          alignSelf : 'flex-end'
      },
      viewThreeStyle:{
          height: 50,
          width: 50,
          backgroundColor: 'purple'
      },
      background:{
          backgroundColor:'#3A3A3A',
          height:'100%',
          justifyContent:'center'
      },
      textInput: {
          height: 40,
          padding: 6,
          margin:10,
          color:'black',
          backgroundColor:'white',
          borderRadius:10,
          justifyContent:'center',
          flexDirection:'row'
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
          title:{
              color:'#FF9933',
              marginLeft:10,
              fontSize:20,
              fontWeight:'bold'
          },
          errorText:{
              color:'#FF9933',
              fontSize:20,
              fontWeight:'bold',
           
              flexDirection:'row',
              alignSelf:'center',
              justifyContent:'center'
          },
          text:{
            color:'#FF9933',
            fontSize:20,
            justifyContent:"center",
            flexDirection:'row',
            paddingTop:50
          },
          textContainer:{
              flexDirection:'row',
              justifyContent:'center'
          }
  });
