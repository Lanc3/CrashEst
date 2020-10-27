import React ,{Component}from 'react';
import {View ,Text, TextInput,StyleSheet,TouchableHighlight} from'react-native';
import StripeCheckout from 'react-stripe-checkout';


export default class ClaimantDetails extends Component {

    constructor({props,navigation}) {
      super(props);
      this.state = { data: { ClaimantName: "" ,ClaimantAddress:'',ClaimantPhone:''} };
      this._onPressButton = this._onPressButton.bind(this);
      this.navigation = navigation;
    }
    onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
      }
  
    _onPressButton() {

    }
  
    
    render() {
        return (
            <View>
                <Text>hello</Text>
                <StripeCheckout></StripeCheckout>
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
          height: 50,
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
              fontWeight:'bold',
              borderBottomWidth:0,
              borderColor:'#FF9933',
          },
          errorText:{
              color:'#FF9933',
              fontSize:14,
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
            paddingLeft:0
          },
          textContainer:{
              flexDirection:'row',
              justifyContent:'center',
              marginBottom:0
          },
          header:{
              marginBottom:70
          }
  });
