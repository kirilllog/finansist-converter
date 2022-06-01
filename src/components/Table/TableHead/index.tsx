import React from 'react';
import styled from 'styled-components';

import { Direction, SortIcon } from '../../SortIcon';
import { ColumnName, SortProps } from '../Table';

type TableHeadProps = {
  label: string;
  type: ColumnName;
  onClick: (columnName: ColumnName, direction: Direction) => void;
  sortProps: SortProps | null;
  isSortable?: boolean;
};

const TableHead = (props: TableHeadProps): React.ReactElement => {
  const { label, isSortable = false, onClick, type, sortProps } = props;

  const handleClickSortIcon = (direction: Direction) => {
    onClick(type, direction);
  };
  return (
    <StyledTh>
      <span>
        {label}
        {isSortable ? (
          <SortIcon onClick={handleClickSortIcon} isActive={sortProps?.name === type} />
        ) : null}
      </span>
    </StyledTh>
  );
};

const StyledTh = styled.th`
  span {
    vertical-align: middle;
  }
`;

export { TableHead };
