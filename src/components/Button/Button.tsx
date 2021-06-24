import styled from 'styled-components';

const Wrapper = styled.button`
  height: 30px;
  width: 110px;
  font-size: 14px;
  border-radius: 2px;
  border: 0;
  background-color: #0077c2;
  color: #ffffff;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background-color: #1492e1;
  }
  &:active {
    background-color: #136599;
  }
`;

export type ButtonProps = {
  children: string;
  onClick: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return <Wrapper onClick={onClick}>{children.toUpperCase()}</Wrapper>;
}
