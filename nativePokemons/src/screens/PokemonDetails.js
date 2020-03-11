import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {connect} from 'react-redux';
import {fetchPokemonDetails} from '../actions';
import upperCase from '../utils/uppercase';

const PokemonDetails = ({route, pokemonDetails, dispatch}) => {
  const {pokemon, image} = route.params;

  console.log(pokemon);

  const getPokemonDetails = () => {
    dispatch(fetchPokemonDetails(pokemon));
  };

  useEffect(() => getPokemonDetails(), []);

  const pokemonTypesandAbilities = element => {
    return pokemonDetails.length !== 0
      ? element.map(e => upperCase(e)).join(' | ')
      : 'Unknown';
  };

  console.log(pokemonDetails);
  if (pokemonDetails === null) {
    return (
      <View>
        <Text>Fetching</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{upperCase(pokemon)}</Text>
        <View style={styles.details}>
          <Text style={styles.textTitle}>Level:</Text>
          <Text style={styles.textDetails}>{pokemonDetails.level}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.textTitle}>Types:</Text>
          <Text style={styles.textDetails}>
            {pokemonTypesandAbilities(pokemonDetails.types)}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.textTitle}>Height:</Text>
          <Text style={styles.textDetails}>{pokemonDetails.height}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.textTitle}>Weight:</Text>
          <Text style={styles.textDetails}>{pokemonDetails.weight}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.textTitle}>Abilities:</Text>
          <Text style={styles.textDetails}>
            {pokemonTypesandAbilities(pokemonDetails.abilities)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    height: 150,
    width: 150,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  detailsContainer: {
    alignItems: 'center',
    flex: 1,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    flexDirection: 'row',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
    marginRight: 5,
  },
  textDetails: {
    alignSelf: 'center',
    fontSize: 18,
  },
});

const mapStateToProps = state => {
  return {
    pokemonDetails: state.pokemonReducer.pokemonDetails,
  };
};

export default connect(mapStateToProps)(PokemonDetails);
