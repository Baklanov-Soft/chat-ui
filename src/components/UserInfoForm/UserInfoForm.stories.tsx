import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { UserInfoForm, UserInfoFormProps } from './UserInfoForm';

const Template: Story<UserInfoFormProps> = (args) => <UserInfoForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  avatarSource:
    'https://3.bp.blogspot.com/-yTF-5A3kAH8/WlCLjrizoeI/AAAAAAAC68Q/BxEnavDjqWYLI22b2rTOdA6wVUIwEIkjACLcBGAs/s1600/dfgh.jpg',
  username: 'JohnDoe',
  email: 'jdoe@gmail.com',
  firstName: 'John',
  lastName: 'Doe',
};

export const Empty = Template.bind({});
Empty.args = {
  username: 'JaneDoe',
};

const WidthDecorator = styled.div`
  width: 500px;
`;

export default {
  title: 'forms/UserInfoForm',
  component: UserInfoForm,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
  argTypes: {
    onCancel: { action: 'click' },
    onSave: { action: 'click' },
  },
} as Meta;
