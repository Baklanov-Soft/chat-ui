import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../Button';
import { Link } from '../Link';
import { Textbox } from '../Textbox';
import { Upload } from '../Upload';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #afbdc4;
  padding: 20px;
  justify-content: start;
`;

const AvatarWrapper = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 30px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 8px;
  align-items: center;
  gap: 8px;

  .required {
    ::after {
      content: '*';
      color: #c31313;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
  justify-content: end;
`;

const CancelButton = styled(Link)`
  font-size: 16px;
  margin: 0 24px;
`;

export type UserInfoFormProps = {
  avatarSource?: string;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  onCancel?: () => void;
  onSave?: (data: UserInfoInput) => void;
};

export type UserInfoInput = {
  avatar?: File;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
};

export function UserInfoForm({
  avatarSource,
  username,
  email,
  firstName,
  lastName,
  onCancel,
  onSave,
}: UserInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UserInfoInput>({
    defaultValues: { username, email, firstName, lastName },
  });
  const [name, setUsername] = useState<string>(username);
  function updateUsername(value: string) {
    setUsername(value);
    setValue('username', value);
  }
  const [mail, setEmail] = useState<string | undefined>(email);
  function updateEmail(value: string) {
    setEmail(value);
    setValue('email', value);
  }
  const [first, setFirstName] = useState<string | undefined>(firstName);
  function updateFirstName(value: string) {
    setFirstName(value);
    setValue('firstName', value);
  }
  const [last, setLastName] = useState<string | undefined>(lastName);
  function updateLastName(value: string) {
    setLastName(value);
    setValue('lastName', value);
  }
  return (
    <Wrapper onSubmit={onSave && handleSubmit(onSave)}>
      <Header>
        <AvatarWrapper src={avatarSource} alt="" />
        <Title>
          <strong>{username}</strong>
          <Upload
            {...register('avatar')}
            accept="image/*"
            onFileChange={(f) => setValue('avatar', f)}
          >
            Change avatar
          </Upload>
        </Title>
      </Header>

      <ContentWrapper>
        <span className="required">Username</span>
        <Textbox
          {...register('username', { required: 'username required' })}
          onChangeText={(s) => updateUsername(s)}
          value={name}
          placeholder="your username"
          error={!!errors.username}
          helperText={errors.username?.message}
          aria-invalid={!!errors.username}
        />
        <span>Email</span>
        <Textbox
          {...register('email')}
          onChangeText={(s) => updateEmail(s)}
          value={mail}
          placeholder="your email"
        />
        <span>First name</span>
        <Textbox
          {...register('firstName')}
          value={first}
          onChangeText={(s) => updateFirstName(s)}
          placeholder="your first name"
        />
        <span>Last name</span>
        <Textbox
          {...register('lastName')}
          onChangeText={(s) => updateLastName(s)}
          value={last}
          placeholder="your last name"
        />
      </ContentWrapper>

      <Footer>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <Button type="submit">SAVE</Button>
      </Footer>
    </Wrapper>
  );
}
