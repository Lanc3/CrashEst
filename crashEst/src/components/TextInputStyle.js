import React, {useState}  from'react';
import { StyleSheet, TextInput, View } from 'react-native';

const BLUE = "#FF9933";
const LIGHT_GRAY = "#428AF8";

const TextInputStyle = ({placeH}) => {
    const [ state, setState ] = useState({isFocused : false});
    

    const handleFocus = event => {
        setState({ isFocused: true });

    };
    
    const handleBlur = event => {
        setState({ isFocused: false });

    };

      
    return <View style={styles.layout}>
        <TextInput
        selectionColor={BLUE}
        underlineColorAndroid={
          state.isFocused ? BLUE : LIGHT_GRAY
        }
        placeholder={placeH}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.textInput}
      />
    </View>
};

const styles = StyleSheet.create({
    textInput: {
      height: 40,
      paddingLeft: 6,
      color:'#FF9933'
    },
    layout:{
        padding:10,
        height:30
    }
  });

export default TextInputStyle;

