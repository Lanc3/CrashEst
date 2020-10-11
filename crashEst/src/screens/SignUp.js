import React, { Component,useState } from 'react';
import { AsyncStorage,Text, View, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { validate } from 'validate.js';

import constraints from '../comstraints/constraints';
const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";
export default class SignUp extends Component {

  constructor({props,navigation}) {
    super(props);
    this.state = { data: { emailAddress: "" ,userName:''} };
    this._onPressButton = this._onPressButton.bind(this);
    this.navigation = navigation;
    this._storeData = this._storeData.bind(this);
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
    console.log(validationResult)
    if(validationResult === null || validationResult === undefined)
    {
        this._storeData();
        this.navigation.navigate('StartA');
    }
    this.setState({ errors: validationResult });
  }

  
  render() {
      return (
        <View style={styles.background}>
           <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(email) => (
              this.setState({
                ...this.state,
                data: {
                  ...this.state.data,
                  emailAddress: email
                }
              })
            )}
            placeholder={'example@gmail.com'}
            value={this.state.data.emailAddress}
          />
           <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => (
              this.setState({
                ...this.state,
                data: {
                  ...this.state.data,
                  userName: name
                }
              })
            )}
            placeholder={'name'}
            value={this.state.data.userName}
          />

          <TouchableHighlight style={styles.button} onPress={this._onPressButton}>
            <Text>Submit</Text>
          </TouchableHighlight>

          {this.isFieldInError('emailAddress') && this.getErrorsInField('emailAddress').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
          {this.isFieldInError('userName') && this.getErrorsInField('userName').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
          
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
        }
});