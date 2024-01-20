import { combineReducers } from '@reduxjs/toolkit';
import { catalogReducer } from './Catalog/catalogSlice';
import filterReducer from './Filter/filterSlice';
import favoritesReducer from '../redux/FavoriteSlice/favoriteSlice';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  filter: filterReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
