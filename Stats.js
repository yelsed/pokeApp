import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Stats = (props) => {
  switch(props.text) {
    case 'normal':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'fire':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'water':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'electric':
     return (
    <View style={{
    backgroundColor: 'yellow',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'grass':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'ice':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'fighting':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'poison':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'ground':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'flying':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'psychic':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'bug':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'rock':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'ghost':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'dragon':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'dark':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'steel':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    case 'fairy':
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
    default:
     return (
    <View style={{
    backgroundColor: 'purple',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 75,
    height: 35,
   
  }}>
        <Text style={styles.iText}>{props.text}</Text>
    </View> 
  )
  }

}





const styles = StyleSheet.create({

  iText :{
    fontSize: 14,
    fontWeight:"bold",
    color: 'white',
    textTransform: 'uppercase'
  }
});

export default Stats;