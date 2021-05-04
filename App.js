import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Keyboard, KeyboardAvoidingView , ScrollView, SafeAreaView, FlatList, ActivityIndicator, TextInput, TouchableOpacity, Image } from 'react-native';
import Stats from "./Stats";
import Alles from "./Alles";
import Evos from "./Evos";
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


const App = () => {
  const [searchName, setSearchName] = useState();
  const [isLoading, setLoading] = useState(true);
  const [evolutionChain, setEvoChainID] = useState();
  const [hp, setHP] = useState();
  const [id, setID] = useState();
  const [speed, setSpeed] = useState();
  const [attack, setAttack] = useState();
  const [defense, setDefense] = useState();
  const [spAtk, setSpAtk] = useState();
  const [spDef, setSpDef] = useState();
  const [image_default, setImage_def] = useState();
  const [image_shiny, setImage_shiny] = useState();
  const [totalStats, setTotal] = useState();
  const [type1, setType1] = useState();
  const [type2, setType2] = useState();
  const [zoeknaam, setZoek] = useState();
  const [evolves1, setEvo1] = useState();
  const [evolves1ID, setEvo1ID] = useState();
  const [evolves2, setEvo2] = useState([]);
  const [evolves2ID, setEvo2ID] = useState();
  const [evolves3, setEvo3] = useState([]);
  const [evolves3ID, setEvo3ID] = useState();
  const icon = <FontAwesome5 name={'search'} size="10" color="#3d7dca" solid />;

  const [name, setName] = useState();


  P.getPokemonByName(searchName) // with Promise
  .then((response) => {
        setName(response.name);
        setID(response.id);
        setHP(            response.stats[0].base_stat);
        setAttack(        response.stats[1].base_stat);
        setDefense(       response.stats[2].base_stat);
        setSpAtk(         response.stats[3].base_stat);
        setSpDef(         response.stats[4].base_stat);
        setSpeed(         response.stats[5].base_stat);
        setTotal(         response.stats[0].base_stat + response.stats[1].base_stat + response.stats[2].base_stat + response.stats[3].base_stat + response.stats[4].base_stat + response.stats[5].base_stat);
        setImage_def(     response.sprites.front_default );
        setImage_shiny(   response.sprites.front_shiny );
        setType1(         response.types[0].type.name);
        setType2(         response.types[1].type.name);
      })
  .catch((error) => console.log('There was an ERROR: ', error))
  .finally(() => setLoading(false));


  P.getPokemonSpeciesByName(searchName)
    .then((response) => {
      setEvoChainID(response.evolution_chain.url.slice(42, -1));

    })
    .catch((error) => console.log('There was an ERROR: ', error))
    .finally(() => setLoading(false));

  
  P.getEvolutionChainById(evolutionChain)
    .then((response) => {
      setEvo1(response.chain.species.name);
      setEvo1ID(response.chain.species.url.slice(42,-1))
      setEvo2(response.chain.evolves_to[0].species.name)
      setEvo2ID(response.chain.evolves_to[0].species.url.slice(42,-1));
      setEvo3(response.chain.evolves_to[0].evolves_to[0].species.name);
      setEvo3ID(response.chain.evolves_to[0].evolves_to[0].species.url.slice(42,-1));
    })
    .catch((error) => console.log('There was an ERROR: ', error))
    .finally(() => setLoading(false));

    
 const ButtonPress = () => {
  setTimeout(() => {
    setEvo1(null);
    setEvo2(null);
    setEvo3(null);

  }, 200);

    Keyboard.dismiss();
    setType1(null);
    setType2(null);
    setSearchName(zoeknaam);
  }


  const PokeType = (props) => {
    if(!props.type2){
    return (
        <Stats text={props.type1}/>
    )}else{
      return([
        <View style={{flexDirection: 'row'}}>
        <Stats text={props.type1}/>
        <Stats text={props.type2}/>
        </View>
      ])
    }
   
  }

  const Pokemon = (props) => {

    if(!props.evolution3){
    return ([
      <View >
        <Evos key='1' text={props.evolution1}/>
        <Evos key='2' text={props.evolution2}/>
      </View>
    ]
    )}
    else if(!props.evolution2 && !props.evolution3){
      return([
        <View >
          <Evos key='1' text={props.evolution1}/>
        </View>
      ])
    }
    else if(props.evolution1 && props.evolution2 && props.evolution3){
      return([
        <View >
          <Evos key='1' text={props.evolution1}/>
          <Evos key='2' text={props.evolution2}/>
          <Evos key='3' text={props.evolution3}/>
        </View>
      ])
    }else{
      return(
        <View></View>
      )
    }

  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView   contentContainerStyle={{
          flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
      >
     {isLoading ? ( 
     <ActivityIndicator/>
       ) : (
      <View> 
<Alles 
    naam={name} 
    id={id}
    hp={hp}
    attack={attack}
    defense={defense}
    spAtk={spAtk}
    spDef={spDef}
    speed={speed}
    total={totalStats}
    image_default={image_default}
    image_shiny={image_shiny}
    evolves1= {evolves1}
    evolves2= {evolves2}
    evolves3= {evolves3}
    />

        <View style={styles.what}>
          <PokeType style ={styles.pokeType} type1={type1} type2={type2}/>
          <Pokemon style={styles.evos} evolution1={evolves1} evolution2={evolves2} evolution3={evolves3}  />

          <View style={styles.images}>
            <Image
              style={styles.tinyDefault}
              source={{
                uri:image_default}}
            />
            <Image
              style={styles.tinyShiny}
              source={{
                uri:image_shiny}}
            />
          </View>
      </View>
      <View  style={styles.writeTaskWrapper}>
      <TextInput 
          style={styles.input} 
          autoCorrect={false} 
          autoCapitalize='none' 
          placeholder={'Zoek een Pokémon'} 
          value={zoeknaam} 
          onChangeText={text => setZoek(text)} 
      />

        <TouchableOpacity onPress={() => ButtonPress()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>{icon}</Text>
          </View>
        </TouchableOpacity>

        </View>
          
    </View>
    )}
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe066',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
statsAll: {
  fontSize: 20
},
evos: {

},
items: {
  marginTop: 5,
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#3d7dca',
  borderWidth: 2.5,
  width: 250,
},

addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#3d7dca',
  borderWidth: 2.5,
},
addText: {},
writeTaskWrapper: {
  bottom: -10,
  flexDirection: 'row',
  justifyContent: 'space-around',
  
},
images: {
  flexDirection: 'row',

},
pokeType: {
  flexDirection: 'row',
  justifyContent: 'space-between',
alignItems: 'center'

},
tinyDefault: {
  width: 150,
  height: 150,
},
tinyShiny: {
  width: 150,
  height: 150,
  marginBottom: 10,

},
});



export default App;