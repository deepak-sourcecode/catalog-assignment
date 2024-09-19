import { FunctionComponent } from 'react';

import { Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';

import { DASHBOARD_STATIC_TIME_PERIOD_FILTER_OPTIONS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectStaticTimePeriodFilterOption, setStaticTimePeriodFilterOption } from '../../slices/dashboardSlice';
import { twclsx } from '../../utils';

const CustomRadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="none"
        borderRadius="md"
        boxShadow="none"
        color="#6F7177"
        _checked={{
          bg: '#4B40EE',
          color: 'white',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        className={twclsx('px-2 py-0.5', 'sm:px-3.5 sm:py-1', 'md:text-lg')}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const ChartIntervalSelector: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const staticTimePeriodFilterOption = useAppSelector(selectStaticTimePeriodFilterOption);

  const handleChange = (selectedValue: string) => {
    const selectedOption = DASHBOARD_STATIC_TIME_PERIOD_FILTER_OPTIONS.find((option) => option.value === selectedValue);

    if (selectedOption) dispatch(setStaticTimePeriodFilterOption(selectedOption));
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'dashboard-chart-time-frame',
    onChange: handleChange,
    value: staticTimePeriodFilterOption?.value,
  });

  const group = getRootProps();

  return (
    <HStack {...group} className={twclsx('flex flex-wrap justify-between gap-0', 'sm:flex-nowrap', 'md:gap-1.5')}>
      {DASHBOARD_STATIC_TIME_PERIOD_FILTER_OPTIONS.map(({ value, label }) => {
        const radio = getRadioProps({ value });

        return (
          <CustomRadioCard key={value} {...radio}>
            {label}
          </CustomRadioCard>
        );
      })}
    </HStack>
  );
};

export default ChartIntervalSelector;
