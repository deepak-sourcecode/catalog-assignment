import { FunctionComponent } from 'react';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { DASHBOARD_TABS } from '../../constants';
import { twclsx } from '../../utils';

const TabSelector: FunctionComponent = () => {
  return (
    <Tabs className="flex min-h-0 flex-grow flex-col">
      <TabList color="#6F7177" className={twclsx('flex flex-wrap px-1', 'md:px-0 md:ps-11')}>
        {DASHBOARD_TABS?.map(({ label, key }) => (
          <Tab
            _selected={{
              color: '#1A243A',
              borderBottomColor: '#4B40EE',
            }}
            className={twclsx('md:px-4 md:pb-3 md:text-lg')}
            key={key}
          >
            {label}
          </Tab>
        ))}
      </TabList>

      <TabPanels className={twclsx('flex min-h-0 flex-grow flex-col')}>
        {DASHBOARD_TABS?.map(({ component, key }) => (
          <TabPanel key={key} className="min-h-0 flex-grow p-0">
            {component}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabSelector;
