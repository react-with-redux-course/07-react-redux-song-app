import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        return (
            <div>
                SongList
            </div>
        )
    }
};

/*
    take data inside of Redux store.
    Then data can be passed off as props
    throughout our React components.
    State refers to data in our Redux store.
*/

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);