import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pokemon extends Component {

    componentDidMount() {
        console.log(this.props);
        
    }

    render() {
        return( <div>

        </div>
        )
    }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Pokemon);