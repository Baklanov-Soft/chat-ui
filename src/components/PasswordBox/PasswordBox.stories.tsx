import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { PasswordBox, PasswordBoxProps } from './PasswordBox';

const Template: Story<PasswordBoxProps> = (args) => <PasswordBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'your password',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'your password',
  error: true,
  helperText: 'Password mismatch.',
};

const WidthDecorator = styled.div`
  width: 230px;
`;

export default {
  title: 'PasswordBox',
  component: PasswordBox,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
} as Meta;
