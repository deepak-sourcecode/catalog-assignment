import { createSlice } from '@reduxjs/toolkit';

import { DASHBOARD_STATIC_TIME_PERIOD_FILTER_OPTIONS } from '../constants';
import { RootState } from '../store';
import { IDashboardStaticTimePeriodFilterMenuItem } from '../types';

import type { PayloadAction } from '@reduxjs/toolkit';
////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////////////
export interface IDashboardState {
  activeCoinId: string;
  staticTimePeriodFilterOption: IDashboardStaticTimePeriodFilterMenuItem;
  isChartFullscreen: boolean;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////////////
const initialState: IDashboardState = {
  activeCoinId: 'bitcoin',
  staticTimePeriodFilterOption: DASHBOARD_STATIC_TIME_PERIOD_FILTER_OPTIONS[2],
  isChartFullscreen: false,
};

////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////////////
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setActiveCoinId: (state, action: PayloadAction<string>) => {
      state.activeCoinId = action.payload;
    },
    setStaticTimePeriodFilterOption: (state, action: PayloadAction<IDashboardStaticTimePeriodFilterMenuItem>) => {
      state.staticTimePeriodFilterOption = action.payload;
    },
    setIsChartFullscreen: (state, action: PayloadAction<boolean>) => {
      state.isChartFullscreen = action.payload;
    },
  },
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////////////
export const { setActiveCoinId, setStaticTimePeriodFilterOption, setIsChartFullscreen } = dashboardSlice.actions;

export const selectActiveCoinId = (state: RootState) => state.dashboard.activeCoinId;
export const selectStaticTimePeriodFilterOption = (state: RootState) => state.dashboard.staticTimePeriodFilterOption;
export const selectIsChartFullscreen = (state: RootState) => state.dashboard.isChartFullscreen;

export default dashboardSlice.reducer;

////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////////////
