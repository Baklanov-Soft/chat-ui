import { Meta, Story } from '@storybook/react';
import { ButtonProps, Wrapper } from './Button';

const Template: Story<ButtonProps> = (args) => <Wrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'next',
};

export default { title: 'Button', component: Wrapper } as Meta;
