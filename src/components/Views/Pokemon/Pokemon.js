import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pokemon extends Component {

    state = {
        pokemon: {}
    }

    componentDidMount() {
        console.log(this.props.match.params.id);

    }

    render() {
        return( <div>

        </div>
        )
    }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Pokemon);