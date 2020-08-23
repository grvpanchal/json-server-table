import {
  GET_SHIPMENTS,
  GET_SHIPMENTS_SUCCESS,
  GET_SHIPMENTS_ERROR,
} from '../actions/types';

export const initialState = {
  isLoading: false,
  shipments: [],
  error: '',
};

export default function shipmentInfoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_SHIPMENTS:
      return { ...state, isLoading: true };
    case GET_SHIPMENTS_SUCCESS:
      return {
        ...state,
        shipments: action.payload,
        isLoading: false,
        error: '',
      };
    case GET_SHIPMENTS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
