import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PokemonItem from '../components/PokemonItem';
import {connect} from 'react-redux';
import {fetchPokemons} from '../actions';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const Home = ({navigation, pokemons, dispatch}) => {
  const getPokemons = () => {
    dispatch(fetchPokemons());
  };

  useEffect(() => getPokemons(), []);

  if (!pokemons.length) null;

  console.log(pokemons.length, navigation);

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={pokemons}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Pokemon Details', {
                    pokemon: item.pokemon_name,
                    image: item.pokemon_image,
                  })
                }>
                <PokemonItem
                  name={item.pokemon_name}
                  image={item.pokemon_image}
                />
              </TouchableOpacity>
            );
          }}
          numColumns={3}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 5,
  },
});

const mapStateToProps = state => {
  return {
    pokemons: state.pokemonReducer.pokemons,
  };
};

export default connect(mapStateToProps)(Home);
