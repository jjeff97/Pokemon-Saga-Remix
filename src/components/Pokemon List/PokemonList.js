import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonList extends Component {
  render() {
    const pokemonListHTMLArray = this.props.store.pokemonReducer.map(
      (item, index) => {
        return (
          <div>
            <img src={item.images} />
            <h4>{item.name}</h4>

          </div>
        );
      }
    );
    return <div> {pokemonListHTMLArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PokemonList);
