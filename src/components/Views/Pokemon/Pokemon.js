import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pokemon extends Component {

    state = {
        pokemon: {}
    }

    componentDidMount() {
        console.log(this.props.match.params.id);

let currentId = this.props.match.params.id;
        let currentPokemon = {};
    
    for(let pokemon of this.props.store.pokemonReducer) {
        if(currentId === pokemon.id) {
            currentPokemon = pokemon;
        }
    }
this.setState(
    {
        pokemon: currentPokemon,
    },
    () => {
        console.log(this.state.pokemon)
    }
    
    )
}

    render() {
        return( <div>

        </div>
        )
    }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Pokemon);