import { useState } from 'react';
import styled from 'styled-components';
import { EyeToggle } from '../EyeToggle';
import { ReactComponent as WarnSign } from './warn-sign.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
`;

const TextboxWrapper = styled.div`
  position: relative;
`;

const Input = styled.input<{ error?: boolean }>`
  border-radius: 2px;
  padding: 4px 32px 4px 16px;
  ${({ error }) =>
    error ? `border: 2px solid #c31313;` : `border: 2px solid #808d94;`}
  ::placeholder {
    color: #808d94;
  }
  &:hover {
    border-color: #000000;
  }
  &:focus {
    color: #000000;
    border-color: #0077c2;
    outline: none;
  }
`;

const Adornment = styled.div`
  position: absolute;
  top: 5px;
  right: 18px;
`;

const MessageHelper = styled.div`
  display: flex;
`;

const Sign = styled.div`
  margin: 8px;
  fill: #c31313;
  width: 17px;
  height: 15px;
`;

const Message = styled.div`
  color: #c31313;
  font-size: 12px;
  margin: 8px;
`;

export type PasswordBoxProps = {
  placeholder?: string;
  error?: boolean;
  helperText?: string;
};

export function PasswordBox({
  placeholder,
  error,
  helperText,
}: PasswordBoxProps) {
  const [visible, setVisible] = useState(false);
  return (
    <Wrapper>
      <TextboxWrapper>
        <Input
          type={visible ? 'text' : 'password'}
          placeholder={placeholder}
          error={error}
        />
        <Adornment>
          <EyeToggle
            dim="18px"
            onChangeVisibility={setVisible}
            visible={visible}
          />
        </Adornment>
      </TextboxWrapper>
      {error && (
        <MessageHelper>
          <Sign>
            <WarnSign />
          </Sign>
          <Message>{helperText}</Message>
        </MessageHelper>
      )}
    </Wrapper>
  );
}
