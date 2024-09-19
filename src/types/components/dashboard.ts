import { ManipulateType } from 'dayjs';

export interface IDashboardStaticTimePeriodFilterMenuItem {
  label: string;
  value: string;
  duration: number;
  unit: ManipulateType;
}
