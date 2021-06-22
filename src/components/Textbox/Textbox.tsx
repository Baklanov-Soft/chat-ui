import styled from 'styled-components';
import { ReactComponent as WarnSign } from './warn-sign.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
`;

const Input = styled.input<TextblockProps>`
  border-radius: 2px;
  padding: 4px 16px;
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

export type TextblockProps = {
  placeholder?: string;
  error?: boolean;
  helperText?: string;
};

export function Textbox({ placeholder, error, helperText }: TextblockProps) {
  return (
    <Wrapper>
      <Input type="input" placeholder={placeholder} error={error} />
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
