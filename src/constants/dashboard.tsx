import { ChartOptions } from 'lightweight-charts';

import { DeepPartial } from '@chakra-ui/react';

import ChartTabContent from '../components/Dashboard/ChartTabContent';
import { IDashboardStaticTimePeriodFilterMenuItem, ITabInfo } from '../types';

export const DASHBOARD_TABS: ITabInfo[] = [
  { key: 'summary', label: 'Summary', component: <></> },
  { key: 'chart', label: 'Chart', component: <ChartTabContent /> },
  { key: 'statistics', label: 'Statistics', component: <></> },
  { key: 'analysis', label: 'Analysis', component: <></> },
  { key: 'settings', label: 'Settings', component: <></> },
];

export const DASHBOARD_STATIC_TIME_PERIOD_FILTER_OPTIONS: IDashboardStaticTimePeriodFilterMenuItem[] = [
  { label: '1d', value: '1d', duration: 1, unit: 'day' },
  { label: '3d', value: '3d', duration: 3, unit: 'day' },
  { label: '1w', value: '1w', duration: 1, unit: 'week' },
  { label: '1m', value: '1m', duration: 1, unit: 'month' },
  { label: '6m', value: '6m', duration: 6, unit: 'month' },
  { label: '1y', value: '1y', duration: 1, unit: 'year' },
  { label: 'max', value: 'max', duration: 1, unit: 'year' },
];

export const TRANSPARENT_RGBA_VALUE = 'rgba(255, 255, 255, 0)';

export const DASHBOARD_CHART_CONFIG: DeepPartial<ChartOptions> = {
  autoSize: true,
  localization: {
    priceFormatter: Intl.NumberFormat(window?.navigator?.languages[0], {
      style: 'decimal',
      currency: 'USD',
    }).format,
  },
  timeScale: {
    tickMarkFormatter: () => '',
    visible: true,
    borderVisible: true,
    borderColor: 'lightgray',
    ticksVisible: false,
    allowBoldLabels: false,
  },
  layout: {
    textColor: 'black',
    background: { color: 'white' },
    fontFamily: 'Circular Std',
    attributionLogo: false,
    fontSize: 18,
  },
  rightPriceScale: {
    borderVisible: true,
    ticksVisible: false,
    borderColor: 'lightgray',
    textColor: TRANSPARENT_RGBA_VALUE,
  },
  leftPriceScale: {
    borderVisible: true,
    ticksVisible: false,
    borderColor: 'lightgray',
    textColor: TRANSPARENT_RGBA_VALUE,
    visible: true,
  },
  overlayPriceScales: {},
  grid: {
    horzLines: {
      visible: false,
    },
  },
  crosshair: {
    vertLine: {
      labelVisible: false,
    },
    horzLine: {
      labelBackgroundColor: '#1A243A',
    },
  },
};
