import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Stats = (props) => {

  return (
    <View style={styles.item}>
        <Text style={styles.itemText}>{props.text}</Text>
    </View> 
  )
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
    color: 'white'

  }
});

export default Stats;