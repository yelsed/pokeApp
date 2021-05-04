import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Evos = (props) => {

if(props.text != " "){
    return ([
      <Text style={styles.iText}>{props.text}</Text>
    ])
    }
}
    
const styles = StyleSheet.create({

    iText :
    {
        flexDirection: 'column' ,   
        borderWidth: 2
    }

  });
  
  export default Evos;