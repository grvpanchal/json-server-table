import { combineReducers } from 'redux';
import shipmentInfoReducer from './shipmentInfoReducer';
import headerReducer from './headerReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  shipmentInfo: shipmentInfoReducer,
});

export default rootReducer;
