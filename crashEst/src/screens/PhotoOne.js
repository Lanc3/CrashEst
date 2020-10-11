import React , { Component, useEffect } from 'react';
import { TextInput , StyleSheet, View, Button, TouchableHighlight, Text} from "react-native";
import CameraButton from "../components/cameraButton"
import { validate } from 'validate.js';
import constraints from '../comstraints/constraints';

export default class PhotoOne extends Component {

    constructor({props,navigation}) {
      super(props);
      this.state = { data: { Manufacturer: "" ,selectedYear:'',Model:''} };
      this._onPressButton = this._onPressButton.bind(this);
      this.navigation = navigation;
      this._storeData = this._storeData.bind(this);
      this.data = navigation.state.params.FormData;
      
    }
  
     _storeData(){
      try {
         AsyncStorage.setItem(
          'SignUpDetails',
          JSON.stringify({email:this.state.data.emailAddress,name:this.state.data.userName})
        );
    
      } catch (error) {
        // Error saving data
        console.log("error")
      }
    }
  
    _onPressButton() {
      const validationResult = validate(this.state.data, constraints);
      // validationResult is undefined if there are no errors
      if(validationResult === null || validationResult === undefined)
      {
          this._storeData();
          this.navigation.navigate('StartA',{FormData:this.state.data});
      }
      this.setState({ errors: validationResult });
    }
  
    
    render() {
        return (
        <View style={styles.background}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Step 3 of 6</Text>
            </View>
        <View style={styles.textContainer}>
            <Text style = {styles.smallText}>Please take upto five photos of the damaged area</Text>
        </View>
        <View style={styles.photoContainer}>
            <CameraButton navi={this.navigation}/>
           
        </View>

        </View>
        );
    }
  
    getErrorMessages(separator="\n") {
      const { errors } = this.state;
      if (!errors) return [];
  
      return Object.values(errors).map(it => it.join(separator)).join(separator);
    }
  
    getErrorsInField(field) {
      const { errors } = this.state;
      return errors && errors[field] || [];
    }
  
    isFieldInError(field) {
      const { errors } = this.state;
      return errors && !!errors[field];
    }
  }
  



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
  },
  textInput: {
    height: 40,
    padding: 6,
    margin:10,
    color:'black',
    backgroundColor:'white',
    borderRadius:10,
    justifyContent:'center',
    flexDirection:'row',
    flex:3
  },
smallText:{
    color:'#FF9933'
},
yearInput:{
    height: 40,
    padding: 6,
    margin:10,
    color:'black',
    backgroundColor:'white',
    borderRadius:10,
    justifyContent:'center',
    flexDirection:'row',
    flex:1
},
modelInput:{
    height: 40,
    padding: 6,
    margin:10,
    color:'black',
    backgroundColor:'white',
    borderRadius:10,
    justifyContent:'center',
    flexDirection:'row',
},
container:{
    flexDirection:'row',
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
        photoContainer:{
            alignSelf:'center'
        }


});