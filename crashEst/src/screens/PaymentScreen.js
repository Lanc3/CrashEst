import React ,{Component}from 'react';
import {View ,Text, TextInput,StyleSheet,TouchableHighlight,ScrollView} from'react-native';
import { validate } from 'validate.js';

import constraints from '../comstraints/paymentConstraints';

export default class PaymentScreen extends Component {

    constructor({props,navigation}) {
      super(props);
      this.state = { data: {  CardHolderName: "" , CardNumber: "" , CardExpireDate: "" ,CVC: "" ,Country:'',ZIP:''} };
      this._onPressButton = this._onPressButton.bind(this);
      this.navigation = navigation;
    }
  
  
    _onPressButton() {
      const validationResult = validate(this.state.data, constraints);
      // validationResult is undefined if there are no errors
      if(validationResult === null || validationResult === undefined)
      {
        this.navigation.navigate('SuccessPayment');
      }
      this.setState({ errors: validationResult });
    }
  
    
    render() {
        return (
            <ScrollView style={styles.view}>
        <View style={styles.background}>
            <View style={styles.textContainer}>
                <Text style={styles.text}></Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Step 6 of 6</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Please enter payment details.</Text>
            </View>
       <Text style={styles.title}>Card Holder Name</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => (
                this.setState({
                  ...this.state,
                  data: {
                    ...this.state.data,
                    CardHolderName: val
                  }
                })
              )}
              placeholder={'Tom'}
              value={this.state.data.CardHolderName}
            />
             <Text style={styles.title}>Card Number</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => (
                this.setState({
                  ...this.state,
                  data: {
                    ...this.state.data,
                    CardNumber: val
                  }
                })
              )}
              placeholder={'123 tom street'}
              value={this.state.data.CardNumber}
            />
             <Text style={styles.title}>Expiry date</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => (
                this.setState({
                  ...this.state,
                  data: {
                    ...this.state.data,
                    CardExpireDate: val
                  }
                })
              )}
              placeholder={'086 990 7865'}
              value={this.state.data.CardExpireDate}
            />
             <Text style={styles.title}>CVC</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => (
                this.setState({
                  ...this.state,
                  data: {
                    ...this.state.data,
                    CVC: val
                  }
                })
              )}
              placeholder={'086 990 7865'}
              value={this.state.data.CVC}
            />
             <Text style={styles.title}>Country</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => (
                this.setState({
                  ...this.state,
                  data: {
                    ...this.state.data,
                    Country: val
                  }
                })
              )}
              placeholder={'Ireland'}
              value={this.state.data.Country}
            />
             <Text style={styles.title}>Eir code</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => (
                this.setState({
                  ...this.state,
                  data: {
                    ...this.state.data,
                    ZIP: val
                  }
                })
              )}
              placeholder={'E3030'}
              value={this.state.data.ZIP}
            />
  
            <TouchableHighlight style={styles.button} onPress={this._onPressButton}>
              <Text>Submit</Text>
            </TouchableHighlight>
  
            {this.isFieldInError('CardHolderName') && this.getErrorsInField('CardHolderName').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
            {this.isFieldInError('CardNumber') && this.getErrorsInField('CardNumber').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
            {this.isFieldInError('CardExpireDate') && this.getErrorsInField('CardExpireDate').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
            {this.isFieldInError('CVC') && this.getErrorsInField('CVC').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
            {this.isFieldInError('Country') && this.getErrorsInField('Country').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
            {this.isFieldInError('ZIP') && this.getErrorsInField('ZIP').map(errorMessage => <Text key={errorMessage} style={styles.errorText}>{errorMessage}</Text>)}
            
          </View>
          </ScrollView>
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
      view:{
        backgroundColor:'#3A3A3A',
        height:'100%'
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
