import { all } from 'redux-saga/effects';
import { watchGetShipments } from './getShipments';

export default function* rootSaga() {
  yield all([
    watchGetShipments(),
  ]);
}
