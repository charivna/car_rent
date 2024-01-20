import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBrand: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    resetFilters: state => {
      state.selectedBrand = '';
    },
  },
});

export const { setSelectedBrand, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
