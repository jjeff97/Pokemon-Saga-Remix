import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PokemonListItem.css';

class PokemonListItem extends Component {

  clickPokemon  = (id) => (event) => {
    console.log(id);
  }
  render() {
    return (
     
        <div className="pokemonListItem" onClick={this.clickPokemon(this.props.pokemon.id)}>
          <img src={this.props.pokemon.images} alt={this.props.pokemon.description} />
          <h4>{this.props.pokemon.name}</h4>
        </div>

    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PokemonListItem);
