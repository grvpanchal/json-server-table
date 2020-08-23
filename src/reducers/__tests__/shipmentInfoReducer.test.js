import shipmentInfoReducer, { initialState } from '../shipmentInfoReducer';
import {
  GET_SHIPMENTS_SUCCESS,
  GET_SHIPMENTS_ERROR,
} from '../../actions/types';

import MOCK_POST_LIST from '../../server/db.json';

describe('Posts Reducer', () => {
  it('Should handle an initial state', () => {
    expect(shipmentInfoReducer()).toEqual(initialState);
  });

  it('Should handle GET_SHIPMENTS_SUCCESS', () => {
    expect(shipmentInfoReducer(initialState, {
      type: GET_SHIPMENTS_SUCCESS,
      payload: MOCK_POST_LIST,
    })).toEqual({
      shipments: MOCK_POST_LIST,
      isLoading: false,
      error: '',
    });
  });

  it('Should handle GET_SHIPMENTS_ERROR', () => {
    expect(shipmentInfoReducer(initialState, {
      type: GET_SHIPMENTS_ERROR,
      payload: 'Not Found',
    })).toEqual({
      shipments: [],
      isLoading: false,
      error: 'Not Found',
    });
  });
});
