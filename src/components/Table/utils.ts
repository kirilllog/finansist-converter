import { ICurrecy } from '../../store/models/ICurrencyRespose';
import { Direction } from '../SortIcon';
import { ColumnName, SortProps } from './Table';

export const sortCurrencies = (currencies: ICurrecy[], sortProps: SortProps) => {
  const key = sortProps ? sortProps.name : ColumnName.CODE;
  switch (sortProps?.direction) {
    case Direction.ASC:
      return [...currencies].sort((c1, c2) => {
        if (c1[key] > c2[key]) {
          return 1;
        }
        if (c1[key] < c2[key]) {
          return -1;
        }
        return 0;
      });
    case Direction.DESK:
      return [...currencies].sort((c1, c2) => {
        if (c1[key] < c2[key]) {
          return 1;
        }
        if (c1[key] > c2[key]) {
          return -1;
        }
        return 0;
      });
    case Direction.NONE:
    default:
      return currencies;
  }
};
