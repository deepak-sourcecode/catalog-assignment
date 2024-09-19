import { FunctionComponent, useEffect, useState } from 'react';

import { SkeletonCircle, SkeletonText } from '@chakra-ui/react';

import { useAppSelector } from '../../hooks';
import { useGetCoinMarketDataByTimeRangeQuery } from '../../services/dashboardApi';
import { selectActiveCoinId, selectStaticTimePeriodFilterOption } from '../../slices/dashboardSlice';
import { twclsx } from '../../utils';

const CoinPriceMetrics: FunctionComponent = () => {
  const activeCoinId = useAppSelector(selectActiveCoinId);
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

  const [formattedPrice, setFormattedPrice] = useState<string>('N.A');
  const [trend, setTrend] = useState<string>('N.A');
  const [formattedDifference, setFormattedDifference] = useState<string>('');
  const [formattedDifferencePercent, setFormattedDifferencePercent] = useState<string>('');

  useEffect(() => {
    if (data?.prices?.length) {
      const totalPoints = data?.prices?.length;
      const initialPrice = data?.prices?.[0]?.[1];
      const latestPrice = data?.prices?.[totalPoints - 1]?.[1];

      const priceDifference = latestPrice - initialPrice;
      const priceDifferencePercent = (priceDifference / initialPrice) * 100;
      const trend = priceDifference >= 0 ? '+' : '-';

      const formattedPrice = latestPrice?.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      const formattedDifference = Math.abs(priceDifference)?.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      const formattedDifferencePercent = Math.abs(priceDifferencePercent)?.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      setTrend(trend);
      setFormattedPrice(formattedPrice);
      setFormattedDifference(formattedDifference);
      setFormattedDifferencePercent(formattedDifferencePercent);
    }
  }, [data]);

  if (isFetching) {
    return (
      <div className={twclsx('flex flex-col gap-1', 'md:gap-3')}>
        <SkeletonCircle size="10" />
        <SkeletonText noOfLines={3} spacing="4" skeletonHeight="2" />
      </div>
    );
  }

  return (
    <div className={twclsx('flex flex-col gap-1', 'md:gap-3')}>
      <div className={twclsx('flex flex-wrap', 'md:flex-nowrap')}>
        <h1 className="text-7xl text-dark-1">{formattedPrice}</h1>
        <h2 className="ps-1.5 pt-1.5 text-2xl text-gray-1">USD</h2>
      </div>
      <span
        className={`${trend === '-' ? 'text-red-500' : 'text-green-1'} text-lg`}
      >{`${trend} ${formattedDifference} (${formattedDifferencePercent}%)`}</span>
    </div>
  );
};

export default CoinPriceMetrics;
