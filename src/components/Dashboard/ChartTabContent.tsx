import { FunctionComponent } from 'react';

import { twclsx } from '../../utils';
import Chart from './Chart';
import ChartActions from './ChartActions';

const ChartTabContent: FunctionComponent = () => {
  return (
    <div className={twclsx('flex h-full flex-col gap-5 pt-5', 'md:gap-7 md:pt-12')}>
      <ChartActions />
      <Chart />
    </div>
  );
};

export default ChartTabContent;
