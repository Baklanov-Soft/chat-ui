import type { ChangeEventHandler } from 'react';
import type {
  ChangeHandler,
  InternalFieldName,
  RefCallBack,
} from 'react-hook-form';
import styled from 'styled-components';
import { TextboxWarning } from '../TextboxWarning';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input<{ error?: boolean }>`
  border-radius: 2px;
  padding: 4px 16px;
  font-size: 14px;
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

export type TextblockProps = {
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  value?: string | ReadonlyArray<string> | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeHandler;
  ref?: RefCallBack;
  name?: InternalFieldName;
};

export function Textbox({
  value,
  error,
  helperText,
  onChange,
  onBlur,
  ref,
  name,
}: TextblockProps) {
  return (
    <Wrapper>
      <Input
        type="text"
        error={error}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        name={name}
      />
      {error && helperText && <TextboxWarning text={helperText} />}
    </Wrapper>
  );
}
