import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export enum Direction {
  ASC = 'ask',
  DESK = 'desk',
  NONE = 'none',
}

type SortIconProps = {
  onClick: (direction: Direction) => void;
  isActive: boolean;
};

const SortIcon = ({ onClick, isActive }: SortIconProps): React.ReactElement => {
  const [direction, setSortDirection] = React.useState<Direction>(Direction.NONE);

  React.useEffect(() => {
    if (!isActive) {
      setSortDirection(Direction.NONE);
    }
  }, [isActive]);

  const handleChangeDirection = () => {
    const newDirection =
      direction === Direction.ASC
        ? Direction.DESK
        : direction === Direction.DESK
        ? Direction.NONE
        : Direction.ASC;
    setSortDirection(newDirection);
    onClick(newDirection);
  };

  return (
    <SortIconWrapper onClick={handleChangeDirection}>
      {direction === Direction.ASC || direction === Direction.NONE ? (
        <StyledArrowDropUpIcon fontSize='small' />
      ) : null}
      {direction === Direction.DESK || direction === Direction.NONE ? (
        <StyledArrowDropDownIcon fontSize='small' />
      ) : null}
    </SortIconWrapper>
  );
};

const StyledArrowDropUpIcon = styled(ArrowDropUpIcon)`
  position: absolute;
  top: -3px;
`;

const StyledArrowDropDownIcon = styled(ArrowDropDownIcon)`
  position: absolute;
  bottom: -3px;
`;

const SortIconWrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export { SortIcon };
