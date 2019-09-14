import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className='ui divided list'>
                {this.renderList()}
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

// note that in dispatch, selectSong is action creator
// selectSong key in return statement will be referenced as this.props.selectSong
const mapDispatchToProps = (dispatch) => {
    return {
        selectSong: (song) => dispatch(selectSong(song))
    }
}

/*
    connect function will take selectSong action creator
    and pass it into our component as a prop.
    connect takes action and gives it into dispatch function for us
*/

// export default connect(mapStateToProps, { selectSong })(SongList);
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
