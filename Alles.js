import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Alles = (props) => {
if(props.naam){
return(
    <View> 
          
    <Text style = {styles.name}>{props.naam}</Text>
    <Text style ={styles.hp}>Pokédex #{props.id}</Text>
    <View style = {styles.border}></View>

    <View style={styles.what}>
      <Text style={styles.statsText}>Stats</Text>
      <Text style ={styles.hp}>HP: {props.hp}</Text>
      <Text style ={styles.attack}>Attack: {props.attack}</Text>
      <Text style ={styles.defense}>Defense: {props.defense}</Text>
      <Text style ={styles.spAtk}>Special Attack: {props.spAtk}</Text>
      <Text style ={styles.spDef}>Special Defense: {props.spDef}</Text>
      <Text style ={styles.speed}>Speed: {props.speed}</Text>
      <Text style ={styles.stats}>Total: {props.total}</Text>
      {/* <PokeType style ={styles.pokeType} type1={type1} type2={type2}/> */}
    

  </View>
  </View>

)}else{
    return null;
}}

const styles = StyleSheet.create({
name: {
    padding: 5,
    fontSize: 50,
    color: '#003a70',
    textTransform: 'capitalize',
    alignItems: 'center'
    
    },
border: {
    borderBottomWidth: 1, 
    marginBottom:     12
    },
tinyDefault: {
    width: 150,
    height: 150,
  },
  tinyShiny: {
    width: 150,
    height: 150,
    marginBottom: 50,
  
  },
  statsText: {
    padding: 5,
    fontSize: 25,
    color : '#3d7dca',
    
},
what: {
    paddingBottom: 5,
    marginTop: 10,
    color: '#3d7dca'

  },

});

export default Alles;