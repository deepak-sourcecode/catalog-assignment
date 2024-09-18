import { FunctionComponent } from 'react';

import { twclsx } from '../../utils';

const CoinPriceMetrics: FunctionComponent = () => {
  return (
    <div className={twclsx('flex flex-col gap-1', 'md:gap-3')}>
      <div className={twclsx('flex flex-wrap', 'md:flex-nowrap')}>
        <h1 className="text-dark-1 text-7xl">63,179.71</h1>
        <h2 className="text-gray-1 ps-1.5 pt-1.5 text-2xl">USD</h2>
      </div>
      <span className="text-green-1 text-lg">+ 2,161.42 (3.54%)</span>
    </div>
  );
};

export default CoinPriceMetrics;
