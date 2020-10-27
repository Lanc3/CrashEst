import React, {PureComponent, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity, StyleSheet,View,Text} from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
export default class PhotoTwo extends PureComponent {  
    
    constructor(props,navigation) 
    {
        super(props);
        this.navigation = navigation;
        this.state = 
        {
            takingPic: false,
            photoCount:0,
            cameraRoll:[],
        };

    }
    

      render() {
        return (
          <View style={styles.container}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
            >
            <View style={styles.textContainer}>
                <Text style={styles.text}>{this.state.photoCount}/5</Text>
            </View>
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                {(this.state.takingPic) ?
                <Text style={styles.saving}> Saving please wait </Text> :
                <TouchableOpacity onPress={() => this.takePicture(this.camera)} style={styles.capture}>
                <FontAwesome style={styles.plus} icon={SolidIcons.camera} />
                </TouchableOpacity>
                }
                
            </View>
            </RNCamera>
          </View>
        );
      }
    
      takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        this.setState({ photoCount: this.state.photoCount + 1 })
        this.state.cameraRoll.push(data.uri)
        if(this.state.photoCount >= 5)
        {
            this.props.navigation.navigate('PhotoDetailsScreen',{imageArray:this.state.cameraRoll});
        }
      };
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
      plus:{
        color: "#FF9933",
        fontSize: 100,
        alignSelf:'center',
        paddingTop:40
      },
       text:{
        color:'#FF9933',
        fontSize:40,
        justifyContent:"center",
        flexDirection:'row'
      },
      textContainer:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:30
    },
    });