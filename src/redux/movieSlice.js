import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  actionMovies: [],
  thrillerMovies: [],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setActionMovies: (state, action) => {
      state.actionMovies = action.payload;
    },
    setThrillerMovies: (state, action) => {
      state.thrillerMovies = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setActionMovies, setThrillerMovies} = movieSlice.actions;

export default movieSlice.reducer;
