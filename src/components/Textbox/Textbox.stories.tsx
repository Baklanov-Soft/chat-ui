import { Meta, Story } from '@storybook/react';
import { TextblockProps, Textbox } from './Textbox';

const Template: Story<TextblockProps> = (args) => <Textbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'type your email here',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'type your email here',
  error: true,
  helperText: 'Error message.',
};

export default {
  title: 'Texbox',
  component: Textbox,
} as Meta;
