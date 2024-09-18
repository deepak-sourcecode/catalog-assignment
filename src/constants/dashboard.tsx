import ChartTabContent from '../components/Dashboard/ChartTabContent';
import { ITabInfo } from '../types';

export const DASHBOARD_TABS: ITabInfo[] = [
  { key: 'summary', label: 'Summary', component: <></> },
  { key: 'chart', label: 'Chart', component: <ChartTabContent /> },
  { key: 'statistics', label: 'Statistics', component: <></> },
  { key: 'analysis', label: 'Analysis', component: <></> },
  { key: 'settings', label: 'Settings', component: <></> },
];
