import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../Button';
import { PasswordBox } from '../PasswordBox';
import { Textbox } from '../Textbox';
import { resolver } from './resolver';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 20px;
  padding: 8px;
`;

const FormItem = styled.div`
  padding: 8px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  padding: 16px 0;
`;

type CreateAccountFormProps = {
  onSubmit?: (data: CreateAccountInput) => void;
};

export interface CreateAccountInput {
  username?: string;
  email?: string;
  password1?: string;
  password2?: string;
}

export function CreateAccountForm({ onSubmit }: CreateAccountFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountInput>({ resolver, mode: 'onSubmit' });
  return (
    <Wrapper onSubmit={onSubmit && handleSubmit(onSubmit)}>
      <Title>Create account</Title>
      <FormItem>
        <Textbox
          {...register('username')}
          placeholder="username"
          error={!!errors.username}
          helperText={errors.username?.message}
          aria-invalid={!!errors.username}
        />
      </FormItem>
      <FormItem>
        <Textbox
          {...register('email')}
          placeholder="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          aria-invalid={!!errors.email}
        />
      </FormItem>
      <FormItem>
        <PasswordBox
          {...register('password1')}
          placeholder="password"
          error={!!errors.password1}
          helperText={errors.password1?.message}
          aria-invalid={!!errors.password1}
        />
      </FormItem>
      <FormItem>
        <PasswordBox
          {...register('password2')}
          placeholder="confirm"
          error={!!errors.password2}
          helperText={errors.password2?.message}
          aria-invalid={!!errors.password2}
        />
      </FormItem>
      <ButtonWrapper>
        <Button>NEXT</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
