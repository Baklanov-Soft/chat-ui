import { Meta, Story } from '@storybook/react';
import { TextboxWarning, TextboxWarningProps } from './TextboxWarning';

const Template: Story<TextboxWarningProps> = (args) => (
  <TextboxWarning {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Error message.',
};

export default {
  title: 'TextboxWarning',
  component: TextboxWarning,
} as Meta;
