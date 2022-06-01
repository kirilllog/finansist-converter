import { Direction } from '../../components/SortIcon';

export interface SortDirectionState {
  columnName: string | null;
  direction: Direction;
}

export interface CurrencyState {
  currentDate: string;
  currentCurrencyCode: string | null;
  amount: number | null;
}
