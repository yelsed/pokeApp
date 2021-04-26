import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PokeType = (props) => {
    if(!props.type2){
    return (
          <Text style={styles.itemText}>{props.type1}   </Text>
    )}
      else{    
        return (
        <Text style={styles.itemNext}>{props.type1}, {props.type2}</Text>
        )}  
  }



const styles = StyleSheet.create({
  item: {
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  },
  itemText :{
    fontSize: 14,
    fontWeight:"bold",
    color: 'white',
    textTransform: 'uppercase'
  }
});

export default PokeType;