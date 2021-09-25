import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { CreateAccountForm, CreateAccountFormProps } from './CreateAccountForm';

const Template: Story<CreateAccountFormProps> = (args) => (
  <CreateAccountForm {...args} />
);

export const Primary = Template.bind({});

const WidthDecorator = styled.div`
  width: 250px;
`;

export default {
  title: 'forms/CreateAccountForm',
  component: CreateAccountForm,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
  argTypes: {
    onSubmit: { action: 'click' },
  },
} as Meta;
