import React from 'react';
import {View ,Text, StyleSheet} from'react-native';

const StartB = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
};

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
    }
});

export default StartB;