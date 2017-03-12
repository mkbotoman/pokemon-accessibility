import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props

    return (
      <li key={pokemon.id}>
        <img alt={pokemon.name} src={pokemon.image} />
        {pokemon.name}
      </li>
    );
  }
}

export default Pokemon
