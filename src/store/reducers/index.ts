import { combineReducers } from 'redux';
import { currencyAPI } from '../services/CurrencyService';
import currencyReducer from './currencyReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  [currencyAPI.reducerPath]: currencyAPI.reducer,
});

export default rootReducer;
