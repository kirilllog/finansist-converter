import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICurrecyResponse } from '../models/ICurrencyRespose';
import { convertToDate } from '../utils';

const baseUrl = 'https://api.currencyapi.com/v3';

const currencyAPI = createApi({
  reducerPath: 'currencyAPI',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query<ICurrecyResponse, void>({
      query: () => `/latest?apikey=${process.env.REACT_APP_API_KEY}&base_currency=RUB`,
      transformResponse: (response: { data: ICurrecyResponse }) => response.data,
    }),

    getHistoricalCurrencies: builder.query<ICurrecyResponse, string>({
      query: (date) =>
        `/historical?apikey=${process.env.REACT_APP_API_KEY}&base_currency=RUB&date=${convertToDate(
          date,
        )}`,
      transformResponse: (response: { data: ICurrecyResponse }) => response.data,
    }),
  }),
});

export { currencyAPI };
