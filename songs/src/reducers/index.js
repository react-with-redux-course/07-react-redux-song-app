import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'What is Love', duration: '4:05'},
        { title: 'Boy With Luv', duration: '2:30'},
        { title: 'Boombayah', duration: '3:15'},
        { title: 'Eyes, Nose, Lips', duration: '1:45'}        
    ];
};

// no selected song when app first starts up

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});