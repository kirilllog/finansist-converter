import React from 'react';
import styled from 'styled-components';

import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { ICurrecy } from '../../../store/models/ICurrencyRespose';
import { Direction } from '../../SortIcon';
import { sortCurrencies } from '../utils';

interface TableProps {
  currencies: ICurrecy[];
}

export enum ColumnName {
  CODE = 'code',
  VALUE = 'value',
}

export interface SortProps {
  name: ColumnName;
  direction: Direction;
}

const Table = (props: TableProps): React.ReactElement => {
  const { currencies } = props;

  const [sortProps, setSortProps] = React.useState<SortProps | null>(null);

  const handleChangeSort = (columnName: ColumnName, direction: Direction) => {
    setSortProps({
      name: columnName,
      direction,
    });
  };

  const memoizedCurrencies = React.useMemo(
    () => (sortProps ? sortCurrencies(currencies, sortProps) : currencies),
    [currencies, sortProps],
  );

  return (
    <StyledTable>
      <StyledTableHead>
        <TableRow>
          <TableHead
            label='Currency'
            isSortable
            onClick={handleChangeSort}
            type={ColumnName.CODE}
            sortProps={sortProps}
          />
          <TableHead
            label='Exchange rate'
            isSortable
            onClick={handleChangeSort}
            type={ColumnName.VALUE}
            sortProps={sortProps}
          />
        </TableRow>
      </StyledTableHead>
      <tbody>
        {memoizedCurrencies.map((currency) => (
          <TableRow key={currency.code}>
            <TableCell>{currency.code}</TableCell>
            <TableCell>{currency.value}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  display: block;
  max-height: 500px;
  position: relative;
  overflow: scroll;
`;

const StyledTableHead = styled.thead`
  position: sticky;
  top: 0;
  background-color: #fff;
`;

export { Table };
