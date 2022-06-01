import React from 'react';

type TableCellProps = {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center' | 'justify';
};

const TableCell = ({ children, align = 'left' }: TableCellProps): React.ReactElement => {
  return <td align={align}>{children}</td>;
};

export { TableCell };
