import { Meta, Story } from '@storybook/react';
import { EyeToggle, EyeToggleProps } from './EyeToggle';

const Template: Story<EyeToggleProps> = (args) => <EyeToggle {...args} />;

export const Primary = Template.bind({});

export default {
  title: 'Eye toggle',
  component: EyeToggle,
  argTypes: {
    onChangeVisibility: { action: 'visibility changed' },
  },
} as Meta;
