import dayjs from 'dayjs';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  ICoinDataByIdApiResponse,
  ICoinMarketDataByTimeRangeApiResponse,
  ICoinMarketDataByTimeRangeRequestParams,
} from '../types';

const { VITE_COIN_API_BASE_URL, VITE_COIN_API_KEY } = import.meta.env;

const baseQuery = fetchBaseQuery({
  baseUrl: VITE_COIN_API_BASE_URL,
});

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery,
  tagTypes: ['Coin', 'Coin Market Data'],
  endpoints: (builder) => ({
    getCoinDataById: builder.query<ICoinDataByIdApiResponse, string>({
      query: (id) => `/api/v3/coins/${id}?x_cg_demo_api_key=${VITE_COIN_API_KEY}`,
      providesTags: ['Coin'],
      keepUnusedDataFor: 0,
    }),
    getCoinMarketDataByTimeRange: builder.query<
      ICoinMarketDataByTimeRangeApiResponse,
      ICoinMarketDataByTimeRangeRequestParams
    >({
      query: ({ id, vs_currency, precision, duration, unit }) => {
        const from = dayjs().subtract(duration, unit).unix();
        const to = dayjs().unix();

        return `/api/v3/coins/${id}/market_chart/range?vs_currency=${vs_currency}&precision=${precision ?? 2}&from=${from}&to=${to}&x_cg_demo_api_key=${VITE_COIN_API_KEY}`;
      },
      providesTags: ['Coin Market Data'],
    }),
  }),
});

export const { useGetCoinDataByIdQuery, useGetCoinMarketDataByTimeRangeQuery } = dashboardApi;
