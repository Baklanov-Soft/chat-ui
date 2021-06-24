import { Meta, Story } from '@storybook/react';
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

export default {
  title: 'PasswordBox',
  component: PasswordBox,
} as Meta;
