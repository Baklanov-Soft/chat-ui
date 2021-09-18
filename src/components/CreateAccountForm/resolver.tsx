import type { Resolver } from 'react-hook-form';
import type { CreateAccountInput } from './CreateAccountForm';

type CreateAccountInputErrors = {
  [K in keyof CreateAccountInput]: { message: string };
};

export const resolver: Resolver<CreateAccountInput> = ({
  username,
  email,
  password1,
  password2,
}) => {
  const errors: CreateAccountInputErrors = {};
  if (!username) {
    errors.username = { message: 'username is required' };
  }
  if (email && !isValidEmail(email)) {
    errors.email = { message: 'invalid email' };
  }
  if (!password1) {
    errors.password1 = { message: 'password empty' };
  }
  if (!password2) {
    errors.password2 = { message: 'confirm is required' };
  }
  if (password1 && password2 && password1 !== password2) {
    errors.password2 = { message: 'password mismatch' };
  }
  if (errors.username || errors.email || errors.password1 || errors.password2) {
    return { values: {}, errors };
  }
  return { values: { username, email, password1, password2 }, errors: {} };
};

function isValidEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
