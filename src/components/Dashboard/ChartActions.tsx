import { FunctionComponent } from 'react';

import { Icon } from '@chakra-ui/react';

import CompareSvg from '../../assets/icons/compare.svg?react';
import FullScreenSvg from '../../assets/icons/fullscreen.svg?react';
import { twclsx } from '../../utils';
import ChartIntervalSelector from './ChartIntervalSelector';

const ChartActions: FunctionComponent = () => {
  return (
    <div className={twclsx('flex flex-col gap-3.5 px-4', 'sm:flex-row', 'md:px-[60px]')}>
      <div className={twclsx('flex w-full justify-between', 'sm:justify-normal sm:gap-8')}>
        <div className={twclsx('text-gray-2 flex items-center justify-center gap-1.5', 'md:gap-2')}>
          <Icon className="h-6 w-6" as={FullScreenSvg} />
          <span className={twclsx('md:text-lg')}>Fullscreen</span>
        </div>

        <div className={twclsx('text-gray-2 flex items-center justify-center gap-1.5', 'md:gap-2')}>
          <Icon className="h-6 w-6" as={CompareSvg} />
          <span className={twclsx('md:text-lg')}>Compare</span>
        </div>
      </div>

      <ChartIntervalSelector />
    </div>
  );
};

export default ChartActions;
