import React, { Component } from 'react'
import './pokemon-list.css'
import Pokemon from './pokemon'
import { pokemons } from './pokemons'

class PokemonList extends Component {
  render() {
    return (
      <div className="pokemon-list">
        {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
      </div>
    );
  }
}

export default PokemonList
