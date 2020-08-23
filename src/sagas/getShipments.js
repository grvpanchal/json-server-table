import { put, takeLatest, call } from 'redux-saga/effects';
import {
  GET_SHIPMENTS,
} from '../actions/types';
import { fetchPostsApi } from '../api';
import { getShipmentsSuccess, getShipmentsError } from '../actions/shipmentInfoAction';

export function* getShipments() {
  try {
    const postData = yield call(fetchPostsApi);
    yield put(getShipmentsSuccess(postData));
  } catch (error) {
    yield put(getShipmentsError(error.toString()));
  }
}

export function* watchGetShipments() {
  yield takeLatest(GET_SHIPMENTS, getShipments);
}
