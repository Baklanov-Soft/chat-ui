import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../Button';
import { Link } from '../Link';
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

const Subtitle = styled.span`
  font-size: 14px;
  padding: 8px;
`;

const FormItem = styled.div`
  padding: 8px;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  width: 100%;
`;

const LinkWrapper = styled(Link)`
  font-size: 14px;
`;

type LoginFormProps = {
  onCreateAccountClick?: () => void;
  onSubmit?: (data: LoginInput) => void;
};

type LoginInput = {
  login: string;
  password: string;
};

export function LoginForm({ onCreateAccountClick, onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();
  return (
    <Wrapper onSubmit={onSubmit && handleSubmit(onSubmit)}>
      <Title>Login</Title>
      <Subtitle>Use your login and password</Subtitle>
      <FormItem>
        <Textbox
          {...register('login', { required: 'login required' })}
          placeholder="login"
          error={!!errors.login}
          helperText={errors.login?.message}
          aria-invalid={!!errors.login}
        />
      </FormItem>
      <FormItem>
        <PasswordBox
          {...register('password', { required: 'password required' })}
          placeholder="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          aria-invalid={!!errors.password}
        />
      </FormItem>
      <Footer>
        <LinkWrapper onClick={onCreateAccountClick}>Create account</LinkWrapper>
        <Button type="submit">NEXT</Button>
      </Footer>
    </Wrapper>
  );
}
