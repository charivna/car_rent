// favoriteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedCars: JSON.parse(localStorage.getItem('likedCars')) || [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleLikedCar: (state, action) => {
      const carId = action.payload;
      if (state.likedCars.includes(carId)) {
        state.likedCars = state.likedCars.filter(id => id !== carId);
      } else {
        state.likedCars.push(carId);
      }
      localStorage.setItem('likedCars', JSON.stringify(state.likedCars));
    },
  },
});

export const { toggleLikedCar } = favoriteSlice.actions;
export default favoriteSlice.reducer;
