import styled from 'styled-components';
import { Button } from '../Button';
import { PasswordBox } from '../PasswordBox';
import { Textbox } from '../Textbox';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 20px;
  padding: 8px;
`;

const FormBox = styled.div`
  padding: 8px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  padding: 16px 0;
`;

export function CreateAccountForm() {
  return (
    <Wrapper>
      <Title>Create account</Title>
      <FormBox>
        <Textbox placeholder="username" />
      </FormBox>
      <FormBox>
        <Textbox placeholder="email" />
      </FormBox>
      <FormBox>
        <PasswordBox placeholder="password" />
      </FormBox>
      <FormBox>
        <PasswordBox placeholder="confirm" />
      </FormBox>
      <ButtonWrapper>
        <Button>next</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
