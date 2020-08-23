import React from 'react';
import { render } from '@testing-library/react';
import ShipmentTableSearch from '../ShipmentTableSearch';
import TestProvider from '../../utils/TestProvider';

import MOCK_POST_LIST from '../../server/db.json';

describe('<ShipmentTableSearch />', () => {
  it('Renders successfully without error', () => {
    const component = render(
      <TestProvider>
        <ShipmentTableSearch shipments={[]} />
      </TestProvider>,
    );
    expect(component.container).toBeTruthy();
  });
  it('Renders successfully without error with Items', async () => {
    const component = render(
      <TestProvider>
        <ShipmentTableSearch shipments={MOCK_POST_LIST.shipments} />
      </TestProvider>,
    );
    expect(component.container).toBeTruthy();
  });
  it('Renders with no results of empty array', async () => {
    const component = render(
      <TestProvider>
        <ShipmentTableSearch shipments={[]} />
      </TestProvider>,
    );
    expect(component.container).toBeTruthy();
  });
});
