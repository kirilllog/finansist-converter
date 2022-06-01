import React from 'react';

type TableRowProps = {
  children: React.ReactNode;
};

const TableRow = (props: TableRowProps): React.ReactElement => {
  const { children } = props;
  return <tr>{children}</tr>;
};

export { TableRow };
