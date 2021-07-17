import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { CreateAccountForm } from './CreateAccountForm';

const Template: Story = (args) => <CreateAccountForm {...args} />;

export const Primary = Template.bind({});

const WidthDecorator = styled.div`
  width: 250px;
`;

export default {
  title: 'CreateAccountForm',
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
