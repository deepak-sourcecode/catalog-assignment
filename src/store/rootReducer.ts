import { combineReducers } from '@reduxjs/toolkit';

import { pokemonApi } from '../services/pokemonApi';
import counterReducer from '../slices/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export default rootReducer;
