import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { LoginForm } from './LoginForm';

const Template: Story = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});

const WidthDecorator = styled.div`
  width: 250px;
`;

export default {
  title: 'forms/LoginForm',
  component: LoginForm,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
  argTypes: {
    onCreateAccountClick: { action: 'click' },
    onSubmit: { action: 'click' },
  },
} as Meta;
