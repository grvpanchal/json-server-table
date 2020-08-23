import {
  GET_SHIPMENTS,
  GET_SHIPMENTS_SUCCESS,
  GET_SHIPMENTS_ERROR,
} from './types';

export const getShipments = () => ({ type: GET_SHIPMENTS });
export const getShipmentsSuccess = (payload) => ({ type: GET_SHIPMENTS_SUCCESS, payload });
export const getShipmentsError = (payload) => ({ type: GET_SHIPMENTS_ERROR, payload });

export default {};
