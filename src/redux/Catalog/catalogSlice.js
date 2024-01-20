import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  loading: true,
  currentPage: 1,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    appendCars: (state, action) => {
      state.cars = [...state.cars, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    updateCars: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const { setCars, appendCars, setLoading, setCurrentPage, updateCars } =
  catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
