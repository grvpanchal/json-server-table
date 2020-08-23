import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import ShipmentsContainer from '../ShipmentsContainer';
import TestProvider from '../../utils/TestProvider';
import POST_MOCK_DATA from '../../server/db.json';

describe('<ShipmentsContainer />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders successfully without error', () => {
    const postsContainer = render(
      <TestProvider>
        <ShipmentsContainer />
      </TestProvider>,
    );
    expect(postsContainer.container).toBeTruthy();
  });
  it('Renders the mock data', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(POST_MOCK_DATA),
    }));
    const postsContainer = render(
      <TestProvider>
        <ShipmentsContainer />
      </TestProvider>,
    );
    expect(postsContainer.container).toBeTruthy();
  });

  it('Renders the empty mock data', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve([]),
    }));
    const postsContainer = render(
      <TestProvider>
        <ShipmentsContainer />
      </TestProvider>,
    );
    expect(postsContainer.container).toBeTruthy();
  });

  it('Shows error upon fetch posts API failure', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.reject(new Error('Unable to Fetch')),
    }));
    const { getByText } = render(
      <TestProvider>
        <ShipmentsContainer />
      </TestProvider>,
    );
    const error = await waitForElement(() => getByText(/Error: Unable to Fetch/i));
    expect(error).toBeTruthy();
  });
});
