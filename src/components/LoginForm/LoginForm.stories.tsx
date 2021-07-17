import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { LoginForm } from './LoginForm';

const Template: Story = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});

const WidthDecorator = styled.div`
  width: 250px;
`;

export default {
  title: 'LoginForm',
  component: LoginForm,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
  argTypes: {
    onClick: { action: 'click' },
  },
} as Meta;
