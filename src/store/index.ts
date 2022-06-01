import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './reducers';
import { currencyAPI } from './services/CurrencyService';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
