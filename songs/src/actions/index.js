// Action creator

// a named (vs default) export
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'SONG _SELECTED',
        payload: song
    };
};