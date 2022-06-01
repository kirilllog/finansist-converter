import React from 'react';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

import { CurrencySelect } from '../Select';
import { Item } from '../Item';
import { currencyAPI } from '../../store/services/CurrencyService';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { currencySlice } from '../../store/reducers/currencyReducer';

const CurrencyConverter = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { currentCurrencyCode, amount } = useAppSelector((state) => state.currency);
  const { data } = currencyAPI.useGetAllCurrenciesQuery();
  const currencies = data ? Object.values(data) : [];
  const currentCurrency = currencies.find((currency) => currency.code === currentCurrencyCode);
  const currentAmount = currentCurrency && amount ? currentCurrency.value * amount : 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(currencySlice.actions.setAmount(Number(event.target.value)));
  };

  return (
    <Item>
      <Typography variant='h5' component='h2' mb={2}>
        Currency converter
      </Typography>

      <FormControl fullWidth>
        <InputLabel htmlFor='outlined-adornment-amount'>Amount</InputLabel>
        <OutlinedInput
          id='outlined-adornment-amount'
          value={amount}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position='start'>
              <CurrencyRubleIcon fontSize='small' />
            </InputAdornment>
          }
          label='Amount'
          type='number'
          size='small'
        />
      </FormControl>

      <CurrencySelect />

      <Typography variant='h6' component='h3' mt={2}>
        {currentAmount && currentCurrencyCode
          ? `${currentAmount.toLocaleString()} ${currentCurrencyCode}`
          : null}
      </Typography>
    </Item>
  );
};

export { CurrencyConverter };
