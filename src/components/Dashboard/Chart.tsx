import { createChart, IChartApi } from 'lightweight-charts';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

import { CloseIcon } from '@chakra-ui/icons';
import { IconButton, Spinner } from '@chakra-ui/react';

import { DASHBOARD_CHART_CONFIG, TRANSPARENT_RGBA_VALUE } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetCoinMarketDataByTimeRangeQuery } from '../../services/dashboardApi';
import {
  selectActiveCoinId,
  selectIsChartFullscreen,
  selectStaticTimePeriodFilterOption,
  setIsChartFullscreen,
} from '../../slices/dashboardSlice';
import { twclsx } from '../../utils';

const Chart: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const activeCoinId = useAppSelector(selectActiveCoinId);
  const isChartFullscreen = useAppSelector(selectIsChartFullscreen);
  const { duration, unit } = useAppSelector(selectStaticTimePeriodFilterOption);
  const { data, isFetching } = useGetCoinMarketDataByTimeRangeQuery(
    {
      id: activeCoinId,
      vs_currency: 'usd',
      duration,
      unit,
    },
    { skip: !activeCoinId || !duration || !unit },
  );

  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartApiRef = useRef<IChartApi | null>(null);

  const [lineSeriesData, setLineSeriesData] = useState<any[]>([]);
  const [histogramSeriesData, setHistogramSeriesData] = useState<any[]>([]);

  useEffect(() => {
    return () => {
      if (chartApiRef.current) {
        chartApiRef.current.remove();
        chartApiRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartApiRef?.current?.remove();
      chartApiRef.current = createChart(chartContainerRef.current, DASHBOARD_CHART_CONFIG);
    }

    if (data?.prices?.length) {
      const transformedLineSeriesData: any[] = data?.prices?.map((price) => ({
        time: price?.[0],
        value: price?.[1],
      }));

      setLineSeriesData(transformedLineSeriesData);
    }

    if (data?.total_volumes?.length) {
      const transformedHistogramSeriesData: any[] = data?.total_volumes?.map((volume) => ({
        time: volume?.[0],
        value: volume?.[1],
      }));

      setHistogramSeriesData(transformedHistogramSeriesData);
    }
  }, [data]);

  useEffect(() => {
    if (chartApiRef.current) {
      const series = chartApiRef.current.addBaselineSeries({
        lineWidth: 2,
        priceLineVisible: false,
        crosshairMarkerVisible: false,
        topLineColor: '#4B40EE',
        topFillColor1: 'rgba(75, 64, 238, 0.2)',
        topFillColor2: TRANSPARENT_RGBA_VALUE,
        bottomLineColor: TRANSPARENT_RGBA_VALUE,
        bottomFillColor1: TRANSPARENT_RGBA_VALUE,
        bottomFillColor2: TRANSPARENT_RGBA_VALUE,
      });

      series.setData(lineSeriesData);

      chartApiRef.current.timeScale().fitContent();
    }
  }, [lineSeriesData]);

  useEffect(() => {
    if (chartApiRef.current) {
      const series = chartApiRef.current.addHistogramSeries({
        priceFormat: {
          type: 'volume',
        },
        color: '#E6E8EB',
        priceScaleId: '',
        priceLineVisible: false,
        lastValueVisible: false,
      });

      series.priceScale().applyOptions({
        scaleMargins: {
          top: 0.95,
          bottom: 0,
        },
      });

      series.setData(histogramSeriesData);

      chartApiRef.current.timeScale().fitContent();
    }
  }, [histogramSeriesData]);

  if (isFetching) {
    // REF: custom solution for removing the chart, can be optimized in a better way later
    if (chartContainerRef && chartContainerRef.current) {
      const innerChartDiv = chartContainerRef.current.querySelector('div');
      if (innerChartDiv) innerChartDiv.style.display = 'none';
    }

    return (
      <div className={twclsx('flex min-h-0 w-full flex-grow items-center justify-center px-4', 'md:px-[60px]')}>
        <Spinner size="xl" className="text-dark-1" />
      </div>
    );
  }

  return (
    <div
      className={twclsx(
        'relative min-h-0 flex-grow',
        'md:pe-1',
        `${isChartFullscreen && 'fixed left-0 top-0 h-screen w-screen bg-white p-10'}`,
      )}
      ref={chartContainerRef}
    >
      <IconButton
        onClick={() => dispatch(setIsChartFullscreen(false))}
        className={twclsx('absolute right-4 top-2 z-10', `${!isChartFullscreen && 'hidden'}`)}
        aria-label="Exit Fullscreen"
        size="sm"
        icon={<CloseIcon />}
      />
    </div>
  );
};

export default Chart;
