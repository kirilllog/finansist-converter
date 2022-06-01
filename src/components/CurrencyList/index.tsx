import React from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { currencySlice } from '../../store/reducers/currencyReducer';
import { currencyAPI } from '../../store/services/CurrencyService';
import { Table } from '../Table/Table';
import { Item } from '../Item';

interface IError {
  status: number;
  data: {
    message: string;
    errors: {
      date: string[];
    };
  };
}

const CurrencyList = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { currentDate } = useAppSelector((state) => state.currency);

  const { data, isLoading, isError, error } =
    currencyAPI.useGetHistoricalCurrenciesQuery(currentDate);
  const currencies = data ? Object.values(data) : [];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(currencySlice.actions.setDate(event.target.value));
  };

  const errors = error as IError;

  return (
    <>
      <Item>
        {!isLoading && isError
          ? errors?.data?.errors?.date.map((err) => (
              <Alert key={err} severity='error'>
                {err}
              </Alert>
            ))
          : null}
        <Typography variant='h5' component='h2' mb={2}>
          The exchange rate of world currencies
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            {isLoading ? (
              <CircularProgress size={30} color='primary' />
            ) : (
              <Table currencies={currencies} />
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='date'
              label='Date'
              type='date'
              defaultValue={currentDate}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              size='small'
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Item>
    </>
  );
};

export { CurrencyList };
