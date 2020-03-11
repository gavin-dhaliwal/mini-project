import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import upperCase from '../utils/uppercase';

const PokemonItem = ({name, image}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{upperCase(name)}</Text>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  name: {
    padding: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PokemonItem;
