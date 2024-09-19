import { combineReducers } from '@reduxjs/toolkit';

import { dashboardApi } from '../services/dashboardApi';
import dashboardReducer from '../slices/dashboardSlice';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
});

export default rootReducer;
