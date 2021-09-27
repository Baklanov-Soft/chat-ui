import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  padding: 6px 30px;
  font-size: 14px;
  border-radius: 2px;
  border: 0;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
  overflow: hidden;
  background-color: #0077c2;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1492e1;
    transition: background-color 0.3s;
  }
  &:active {
    box-shadow: 0px 0px 16px 0px rgba(34, 60, 80, 0.5) inset;
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
