import { router } from "expo-router";
import React, { useCallback } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function PokeAPIHome() {
  const handleStorePress = useCallback(() => {
    router.push(`/(tabs)/explore`)
  }, []);

  return (
    <View style={styles.conteiner}>
      <View style={styles.headre}>

        <Image style={styles.imageLogo} source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }} />

      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Uso de la Pokedex</Text>
        <Text style={styles.textPokemon}>
          Origen del nombre:
          El nombre completo en japonés es "Pocket Monsters" (ポケットモンスター), pero se abrevió como Pokémon (ポケモン).
        </Text>
        <Button
          onPress={handleStorePress}
          title="Pokemones"
        />
      </View>
    </View>)
}




const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  headre: {
    backgroundColor: '#ef5350',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center'
  },
  imageLogo: {
    width: 250,
    height: 100,
  },
  textPokemon: {
    fontSize: 15,
  },
  listadoPokemon: {
    paddingTop: 50,
    paddingLeft: 5,
  },
  info: {
    padding: 5,
  },
})