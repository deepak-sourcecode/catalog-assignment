import { FunctionComponent } from 'react';

import CoinPriceMetrics from '../../components/Dashboard/CoinPriceMetrics';
import TabSelector from '../../components/Dashboard/TabSelector';
import { twclsx } from '../../utils';

const Dashboard: FunctionComponent = () => {
  return (
    <div className={twclsx('flex size-full flex-col gap-2', 'md:gap-7')}>
      <header className={twclsx('px-5 pt-6', 'md:px-[60px] md:pt-[60px]')}>
        <CoinPriceMetrics />
      </header>

      <TabSelector />
    </div>
  );
};

export default Dashboard;
