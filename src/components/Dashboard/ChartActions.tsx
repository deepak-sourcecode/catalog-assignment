import { FunctionComponent } from 'react';

import { Icon } from '@chakra-ui/react';

import CompareSvg from '../../assets/icons/compare.svg?react';
import FullScreenSvg from '../../assets/icons/fullscreen.svg?react';
import { useAppDispatch } from '../../hooks';
import { setIsChartFullscreen } from '../../slices/dashboardSlice';
import { twclsx } from '../../utils';
import ChartIntervalSelector from './ChartIntervalSelector';

const ChartActions: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={twclsx('flex flex-col gap-3.5 px-4', 'sm:flex-row', 'md:px-[60px]')}>
      <div className={twclsx('flex w-full justify-between', 'sm:justify-normal sm:gap-8')}>
        <button
          onClick={() => dispatch(setIsChartFullscreen(true))}
          className={twclsx('flex items-center justify-center gap-1.5 text-gray-2', 'md:gap-2')}
        >
          <Icon className="h-6 w-6" as={FullScreenSvg} />
          <span className={twclsx('md:text-lg')}>Fullscreen</span>
        </button>

        <button className={twclsx('flex items-center justify-center gap-1.5 text-gray-2', 'md:gap-2')}>
          <Icon className="h-6 w-6" as={CompareSvg} />
          <span className={twclsx('md:text-lg')}>Compare</span>
        </button>
      </div>

      <ChartIntervalSelector />
    </div>
  );
};

export default ChartActions;
