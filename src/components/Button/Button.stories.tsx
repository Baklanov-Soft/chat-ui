import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'next',
};

export default {
  title: 'Button',
  component: Button,
} as Meta;
