import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CircularProgress, InputAdornment } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { currencyAPI } from '../../store/services/CurrencyService';
import { currencySlice } from '../../store/reducers/currencyReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Loader = (): React.ReactElement => (
  <InputAdornment position='start'>
    <CircularProgress size={16} color='primary' />
  </InputAdornment>
);

const CurrencySelect = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(currencySlice.actions.setCurrentCurrency(event.target.value));
  };

  const { data, isLoading } = currencyAPI.useGetAllCurrenciesQuery();
  const currencies = data ? Object.values(data) : [];
  const { currentCurrencyCode } = useAppSelector((state) => state.currency);
  const checkedCurrency = currencies.find((currency) => currency.code === currentCurrencyCode);

  return (
    <FormControl fullWidth sx={{ mt: 2 }} size='small'>
      <InputLabel id='select-small'>Currency</InputLabel>
      <Select
        labelId='select-small'
        value={checkedCurrency?.code ?? ''}
        label='Currency'
        onChange={handleChange}
        disabled={isLoading}
        IconComponent={isLoading ? Loader : ArrowDropDownIcon}
        MenuProps={MenuProps}
      >
        {currencies.map((currency) => (
          <MenuItem key={currency.code} value={currency.code}>
            {currency.code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { CurrencySelect };
