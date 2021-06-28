import type { Resolver } from 'react-hook-form';
import type { CreateAccountInput } from './CreateAccountForm';

export const resolver: Resolver<CreateAccountInput> = ({
  username,
  email,
  password1,
  password2,
}) => {
  if (!username) {
    return {
      values: {},
      errors: {
        username: { message: 'username is required' },
      },
    };
  }
  if (email || (email && !isValidEmail(email))) {
    return {
      values: {},
      errors: {
        email: { message: 'invalid email' },
      },
    };
  }
  if (!password1) {
    return {
      values: {},
      errors: {
        password1: { message: 'password empty' },
      },
    };
  }
  if (!password2) {
    return {
      values: {},
      errors: {
        password2: { message: 'confirm is required' },
      },
    };
  }
  if (password1 && password2 && password1 !== password2) {
    return {
      values: {},
      errors: {
        password2: { message: 'password mismatch' },
      },
    };
  }
  return { values: { username, email, password1, password2 }, errors: {} };
};

function isValidEmail(email: string) {
  return /^[\w-.]+@([\w-]+\.)+\w+$/.test(email);
}
