import { createChart } from 'lightweight-charts';
import { FunctionComponent, useEffect, useRef } from 'react';

import { twclsx } from '../../utils';

const Chart: FunctionComponent = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const seriesData = [
    { time: '2018-10-19', value: 54.9 },
    { time: '2018-10-22', value: 54.98 },
    { time: '2018-10-23', value: 57.21 },
    { time: '2018-10-24', value: 57.42 },
    { time: '2018-10-25', value: 56.43 },
    { time: '2018-10-26', value: 55.51 },
    { time: '2018-10-29', value: 56.48 },
    { time: '2018-10-30', value: 58.18 },
    { time: '2018-10-31', value: 57.09 },
    { time: '2018-11-01', value: 56.05 },
    { time: '2018-11-02', value: 56.63 },
    { time: '2018-11-05', value: 57.21 },
    { time: '2018-11-06', value: 57.21 },
    { time: '2018-11-07', value: 57.65 },
    { time: '2018-11-08', value: 58.27 },
    { time: '2018-11-09', value: 58.46 },
    { time: '2018-11-12', value: 58.72 },
    { time: '2018-11-13', value: 58.66 },
    { time: '2018-11-14', value: 58.94 },
    { time: '2018-11-15', value: 59.08 },
    { time: '2018-11-16', value: 60.21 },
    { time: '2018-11-19', value: 60.62 },
    { time: '2018-11-20', value: 59.46 },
    { time: '2018-11-21', value: 59.16 },
    { time: '2018-11-23', value: 58.64 },
    { time: '2018-11-26', value: 59.17 },
    { time: '2018-11-27', value: 60.65 },
    { time: '2018-11-28', value: 60.06 },
    { time: '2018-11-29', value: 59.45 },
    { time: '2018-11-30', value: 60.3 },
    { time: '2018-12-03', value: 58.16 },
    { time: '2018-12-04', value: 58.09 },
    { time: '2018-12-06', value: 58.08 },
    { time: '2018-12-07', value: 57.68 },
    { time: '2018-12-10', value: 58.27 },
    { time: '2018-12-11', value: 58.85 },
  ];

  const volumeData = [
    { time: '2018-10-19', value: 19103293.0 },
    { time: '2018-10-22', value: 21737523.0 },
    { time: '2018-10-23', value: 29328713.0 },
    { time: '2018-10-24', value: 37435638.0 },
    { time: '2018-10-25', value: 25269995.0 },
    { time: '2018-10-26', value: 24973311.0 },
    { time: '2018-10-29', value: 22103692.0 },
    { time: '2018-10-30', value: 25231199.0 },
    { time: '2018-10-31', value: 24214427.0 },
    { time: '2018-11-01', value: 22533201.0 },
    { time: '2018-11-02', value: 14734412.0 },
    { time: '2018-11-05', value: 12733842.0 },
    { time: '2018-11-06', value: 12371207.0 },
    { time: '2018-11-07', value: 14891287.0 },
    { time: '2018-11-08', value: 12482392.0 },
    { time: '2018-11-09', value: 17365762.0 },
    { time: '2018-11-12', value: 13236769.0 },
    { time: '2018-11-13', value: 13047907.0 },
    { time: '2018-11-14', value: 18288710.0 },
    { time: '2018-11-15', value: 17147123.0 },
    { time: '2018-11-16', value: 19470986.0 },
    { time: '2018-11-19', value: 18405731.0 },
    { time: '2018-11-20', value: 22028957.0 },
    { time: '2018-11-21', value: 18482233.0 },
    { time: '2018-11-23', value: 7009050.0 },
    { time: '2018-11-26', value: 12308876.0 },
    { time: '2018-11-27', value: 14118867.0 },
    { time: '2018-11-28', value: 18662989.0 },
    { time: '2018-11-29', value: 14763658.0 },
    { time: '2018-11-30', value: 31142818.0 },
  ];

  useEffect(() => {
    if (chartContainerRef.current !== null) {
      const chart = createChart(chartContainerRef.current, {
        autoSize: true,
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
          textColor: 'transparent',
        },
        leftPriceScale: {
          borderVisible: true,
          ticksVisible: false,
          borderColor: 'lightgray',
          textColor: 'transparent',
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
      });

      chart.timeScale().fitContent();

      const newSeries = chart.addBaselineSeries({
        lineWidth: 2,
        priceLineVisible: false,
        crosshairMarkerVisible: false,
        topLineColor: '#4B40EE',
        topFillColor1: 'rgba(75, 64, 238, 0.2)',
        topFillColor2: 'rgba(255, 255, 255, 0)',
        bottomLineColor: 'rgba(255, 255, 255, 0)',
        bottomFillColor1: 'rgba(255, 255, 255, 0)',
        bottomFillColor2: 'rgba(255, 255, 255, 0)',
      });

      newSeries.setData(seriesData);

      const volumeSeries = chart.addHistogramSeries({
        priceFormat: {
          type: 'volume',
        },
        color: '#E6E8EB',
        priceScaleId: '',
        priceLineVisible: false,
        lastValueVisible: false,
      });

      volumeSeries.priceScale().applyOptions({
        scaleMargins: {
          top: 0.92,
          bottom: 0,
        },
      });

      volumeSeries.setData(volumeData);

      return () => {
        chart.remove();
      };
    }
  }, []);

  return <div className={twclsx('min-h-0 flex-grow', 'md:pe-1')} ref={chartContainerRef} />;
};

export default Chart;
