import { createAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CurrencyState } from '../models/ICurrecyState';

export const setNewCurrentDate = createAction<string>('table/setNewCurrentDate');

const initialState: CurrencyState = {
  currentDate: new Date().toISOString().split('T')[0],
  currentCurrencyCode: null,
  amount: null,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrentCurrency(state, action: PayloadAction<string>) {
      state.currentCurrencyCode = action.payload;
    },
    setAmount(state, action: PayloadAction<number>) {
      state.amount = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.currentDate = action.payload;
    },
  },
});

export default currencySlice.reducer;
