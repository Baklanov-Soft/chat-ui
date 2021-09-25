import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  padding: 6px 32px;
  font-size: 14px;
  border-radius: 2px;
  border: 0;
  background-color: #0077c2;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: #1492e1;
  }
  &:active {
    background-color: #136599;
  }
`;

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({ children, onClick, type }: ButtonProps) {
  return (
    <Wrapper onClick={onClick} type={type}>
      {children}
    </Wrapper>
  );
}
