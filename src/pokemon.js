import React, { Component } from 'react'
import './pokemon.css'

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props

    return (
      <span className="pokemon-list-item" key={pokemon.id}>
        <a href={`https://pokemondb.net/pokedex/${pokemon.name}`} target="_blank">
          <img className="pokemon-list-image" alt={pokemon.name} src={pokemon.image} />
          <h2>{pokemon.name}</h2>
        </a>
      </span>
    );
  }
}

export default Pokemon
