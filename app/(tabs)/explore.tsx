import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

interface PokeAPIHomeState {
  loading: boolean;
  pokemon: any[];
  url: string;
}

export default class PokeAPIExplore extends React.Component<{}, PokeAPIHomeState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    }
  }

  componentDidMount(): void {
    this.getPokemon();
  }

  getPokemon = () => {
    this.setState({ loading: true })
    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pokemon: res.results,
          url: res.next,
          loading: false
        })
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.conteiner}>
          <View style={styles.headre}>

            <Image style={styles.imageLogo} source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }} />

          </View>
          <View>
            <Text>Descargando Listado de Pokemon</Text>
          </View>
        </View>
      )
    }

    return (
      <GestureHandlerRootView>
      <View style={styles.conteiner}>
        <View style={styles.headre}>

          <Image style={styles.imageLogo} source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }} />

        </View>
        <View style={styles.listadoPokemon}>
          <FlatList
            data={this.state.pokemon}
            keyExtractor={(item, index) => item.name || index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.textPokemon}>{item.name}</Text>
            )}
          />
        </View>
      </View>
      </GestureHandlerRootView>
    )
  }
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
  imageLogo: {
    width: 250,
    height: 100,
  },
  textPokemon: {
    fontSize: 20,
  },
  listadoPokemon: {
    paddingTop: 5,
  },
})