import React, { Component } from 'react';
import PokemonList from '../../Pokemon List/PokemonList';
class Home extends Component {

    clickPokemon  = (id) => (event) => {
        this.props.history.push(`/pokemon/${id}`);
      }
  render() {
    return (
      <div>
        <PokemonList clickPokemon={this.clickPokemon} />
        
      </div>
    );
  }
}

export default Home;
