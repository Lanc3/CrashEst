import * as yup from 'yup'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-community/async-storage';
import React, { Component, Fragment } from 'react';
import { TextInput, Text, Button, TouchableHighlight, StyleSheet, View} from 'react-native';


export default class App extends Component {
    constructor({props,navigation}){
        super(props);
        this.navigation = navigation;
        this._onPressButton = this._onPressButton.bind(this);
        this._storeData = this._storeData.bind(this);
    }

    _onPressButton(values) {
        this._storeData(values);
       this.props.navigation.navigate("StartAScreen")
    };

    _storeData(values){
        try {
            console.log("saved")
           AsyncStorage.setItem(
            'SignUpDetails',
            JSON.stringify({email:values.email,name:values.name})
          );
      
        } catch (error) {
          // Error saving data
          console.log("error")
        }
      };

  render() {
    return (
      <Formik
        initialValues={{ email: '', name: '' }}
        onSubmit={values => this._onPressButton(values)}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email()
            .required(),
            name: yup
            .string()
            .min(6)
            .required(),
        })}
       
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Fragment >
              <View style={styles.background}>
            <TextInput
              style={styles.textInput}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={styles.errorText}>{errors.email}</Text>
            }
            <TextInput
              style={styles.textInput}
              value={values.name}
              onChangeText={handleChange('name')}
              placeholder="Name"
              onBlur={() => setFieldTouched('name')}
              secureTextEntry={false}
            />
            {touched.name && errors.name &&
              <Text style={styles.errorText}>{errors.name}</Text>
            }
            
            <TouchableHighlight style={styles.button} onPress={handleSubmit}>
              <Text>Submit</Text>
            </TouchableHighlight>
            </View>
          </Fragment>
        )}
      </Formik>
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
            color:'red',
            fontSize:12,
            fontWeight:'bold',
            marginLeft:15,
            flexDirection:'row',
            alignSelf:'flex-start',
            justifyContent:'center'
        }
});