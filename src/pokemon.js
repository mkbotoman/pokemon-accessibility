import React, { Component } from 'react'
import './pokemon.css'

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props

    return (
      <li className="pokemon-list-item" key={pokemon.id}>
        <img className="pokemon-list-image" alt={pokemon.name} src={pokemon.image} />
        <h2>{pokemon.name}</h2>
      </li>
    );
  }
}

export default Pokemon
