import React ,{Component}from 'react';
import {View ,Text, TextInput,StyleSheet,TouchableHighlight} from'react-native';
import { validate } from 'validate.js';

import constraints from '../comstraints/claimantConstraints';

export default class ClaimantDetails extends Component {

    constructor({props,navigation}) {
      super(props);
      this.state = { data: { ClaimantName: "" ,ClaimantAddress:'',ClaimantPhone:''} };
      this._onPressButton = this._onPressButton.bind(this);
      this.navigation = navigation;
    }
  
  
    _onPressButton() {
      const validationResult = validate(this.state.data, constraints);
      // validationResult is undefined if there are no errors
      if(validationResult === null || validationResult === undefined)
      {
        this.navigation.navigate('Payment');
      }
      this.setState({ errors: validationResult });
    }
  
    
    render() {
        return (
        <View style={styles.background}>
            <View style={styles.textContainer}>
                <Text style={styles.text}></Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Step 5 of 6</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Please enter claimant details.</Text>
            </View>
       <Text style={styles.title}>Claimant Name</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => (
                this.setState({
                  ...this.state,
                  data: {
                    ...this.state.data,
                    ClaimantName: val
                  }
                })
              )}
              placeholder={'Tom'}
              value={this.state.data.ClaimantName}
            />
             <Text style={styles.title}>Claimant Address</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(address) => (
                this.setState({
                  ...this.state,
                  data: {
                    ...this.state.data,
                    ClaimantAddress: address
                  }
                })
              )}
              placeholder={'123 tom street'}
              value={this.state.data.ClaimantAddress}
            />
             <Text style={styles.title}>Claimant Phone Number</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(phoneNumber) => (
                this.setState({
                  ...this.state,
                  data: {
                    ...this.state.data,
                    ClaimantPhone: phoneNumber
                  }
                })
              )}
              placeholder={'086 990 7865'}
              value={this.state.data.ClaimantPhone}
            />
  
            <TouchableHighlight style={styles.button} onPress={this._onPressButton}>
              <Text>Submit</Text>
            </TouchableHighlight>
  
            {this.isFieldInError('ClaimantPhone') && this.getErrorsInField('ClaimantPhone').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
            {this.isFieldInError('ClaimantAddress') && this.getErrorsInField('ClaimantAddress').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
            {this.isFieldInError('ClaimantName') && this.getErrorsInField('ClaimantName').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
            
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
          }
  });
