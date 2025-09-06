import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      const exists = state.find((m) => m.id === movie.id);
      if (!exists) {
        state.push(movie);
      }
    },
    removeFromWatchlist: (state, action) => {
      const id = action.payload;
      return state.filter((m) => m.id !== id);
    },
    clearWatchlist: () => {
      return [];
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, clearWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
