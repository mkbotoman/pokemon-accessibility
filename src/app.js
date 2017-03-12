import React, { Component } from 'react'
import './app.css'
import PokemonList from './pokemon-list.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Welcome to Pokemon For Accessibility</h2>
        </div>
        <PokemonList />
      </div>
    );
  }
}

export default App
