import type { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  color: #0077c2;
  font-size: 16px;
  background: 0;
  border: 0;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export type LinkProps = {
  children: ReactNode;
  onClick: () => void;
};

export function Link({ children, onClick }: LinkProps) {
  return (
    <ButtonWrapper type="button" onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}
