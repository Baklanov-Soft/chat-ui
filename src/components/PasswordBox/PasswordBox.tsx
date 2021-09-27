import type { ChangeEvent, ChangeEventHandler } from 'react';
import { useState } from 'react';
import type {
  ChangeHandler,
  InternalFieldName,
  RefCallBack,
} from 'react-hook-form';
import styled from 'styled-components';
import { EyeToggle } from '../EyeToggle';
import { TextboxWarning } from '../TextboxWarning';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const Input = styled.input<{ error?: boolean }>`
  border-radius: 2px;
  padding: 4px 36px 4px 16px;
  font-size: 14px;
  ${({ error }) =>
    error ? `border: 2px solid #c31313;` : `border: 2px solid #808d94;`}
  transition: border-color 0.3s;
  ::placeholder {
    color: #808d94;
  }
  &:hover {
    border-color: #000;
    transition: border-color 0.3s;
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
  right: 20px;
`;

export type PasswordBoxProps = {
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  value?: string | ReadonlyArray<string> | number;
  onChangePassword?: (s: string) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeHandler;
  ref?: RefCallBack;
  name?: InternalFieldName;
};

export function PasswordBox({
  error,
  helperText,
  placeholder,
  onChangePassword,
  onChange,
  onBlur,
  ref,
  name,
  value,
}: PasswordBoxProps) {
  const [visible, setVisible] = useState(false);
  function onChangeInternal(e: ChangeEvent<HTMLInputElement>) {
    onChangePassword?.(e.target.value);
    onChange?.(e);
  }
  return (
    <Wrapper>
      <Input
        type={visible ? 'text' : 'password'}
        error={error}
        onChange={onChangeInternal}
        onBlur={onBlur}
        ref={ref}
        name={name}
        placeholder={placeholder}
        value={value}
      />
      <Adornment>
        <EyeToggle
          dim="18px"
          onChangeVisibility={setVisible}
          visible={visible}
        />
      </Adornment>
      {error && helperText && <TextboxWarning text={helperText} />}
    </Wrapper>
  );
}
