import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const PokemonDetails = ({navigation, route}) => {
  const {pokemon, image} = route.params;

  return (
    <View>
      <Text>{pokemon}</Text>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});

export default PokemonDetails;
