import { combineReducers } from '@reduxjs/toolkit';
import { catalogReducer } from './Catalog/catalogSlice';
import filterReducer from './Filter/filterSlice';
// Замініть шлях на ваш шлях до catalogSlice

const rootReducer = combineReducers({
  catalog: catalogReducer,
  filter: filterReducer,
});

export default rootReducer;
