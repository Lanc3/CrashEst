import React , { Component, Fragment, useEffect } from 'react';
import { TextInput , StyleSheet, View, Button, TouchableHighlight, Text} from "react-native";
import ButtonStyle from "../components/ButtonStyle"
import * as yup from 'yup'
import { Formik } from 'formik'
import constraints from '../comstraints/modelConstraints';

export default class PickArea extends Component {

    constructor({route,props,navigation}) {
      super(props);
      this.state = { data: { Manufacturer: "" ,selectedYear:'',Model:''} };
      this._onPressButton = this._onPressButton.bind(this);
      this.navigation = navigation;
      this._storeData = this._storeData.bind(this);
      this.type = route.params.VehicleData;
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
  
    _onPressButton(values) {
        console.log(values)
        this.props.navigation.navigate("PhotoOneScreen", {FormData:values})
    }
  
    
    render() {
        return (
        <Formik
        initialValues={{ year: '', manufacturer: '', model:''}}
        onSubmit={values => this._onPressButton(values)}
        validationSchema={yup.object().shape(
            {
            year: yup
            .number()
            .required()
            .min(1970),
            manufacturer: yup
            .string()
            .required(),
            model : yup
            .string()
            .required(),
        })}
       
      >
          
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <Fragment >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Step 2 of 6</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style = {styles.smallText}>You Selected: {JSON.stringify(this.type)}</Text>
                </View>
            <View style={styles.background}>
            <TextInput
              style={styles.yearInput}
              value={values.year}
              onChangeText={handleChange('year')}
              onBlur={() => setFieldTouched('year')}
              placeholder="1970"
            />
            {touched.year && errors.year &&
              <Text style={styles.errorText}>{errors.year}</Text>
            }
            <TextInput
              style={styles.textInput}
              value={values.manufacturer}
              onChangeText={handleChange('manufacturer')}
              placeholder="manufacturer"
              onBlur={() => setFieldTouched('manufacturer')}
              secureTextEntry={false}
            />
            {touched.manufacturer && errors.manufacturer &&
              <Text style={styles.errorText}>{errors.manufacturer}</Text>
            }
            <TextInput
              style={styles.modelInput}
              value={values.model}
              onChangeText={handleChange('model')}
              placeholder="model"
              onBlur={() => setFieldTouched('model')}
              secureTextEntry={false}
            />
            {touched.model && errors.model &&
              <Text style={styles.errorText}>{errors.model}</Text>
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
    backgroundColor:'#3A3A3A',
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
    flexDirection:'row'
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
    flexDirection:'row'
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
            fontSize:14,
            fontWeight:'bold',
         
            flexDirection:'row',
            alignSelf:'center',
            justifyContent:'center'
        }


});