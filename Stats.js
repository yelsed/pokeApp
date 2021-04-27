import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Stats = (props) => {
  switch(props.text) {
    case 'normal':
     return (
    <View style={{
    backgroundColor: '#B7B7A9',
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
    backgroundColor: '#FF6144',
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
    backgroundColor: '#52A9FF',
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
    backgroundColor: '#FFCC33',
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
    backgroundColor: '#8CD46F',
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
    backgroundColor: '#7DD4FF',
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
    backgroundColor: '#C56E60',
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
    backgroundColor: '#AA5599',
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
    backgroundColor: '#E2C56F',
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
    backgroundColor: '#9AA9FF',
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
    backgroundColor: '#FF6FA9',
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
    backgroundColor: '#AABB22',
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
    backgroundColor: '#C5B77D',
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
    backgroundColor: '#6969BC',
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
    backgroundColor: '#8C7DF1',
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
    backgroundColor: '#8C6F61',
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
    backgroundColor: '#B7B7C5',
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
    backgroundColor: '#F1A9F1',
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
     return(
     null
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