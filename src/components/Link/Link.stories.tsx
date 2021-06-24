import { Meta, Story } from '@storybook/react';
import { Link, LinkProps } from './Link';

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Cancel',
};

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    onClick: { action: 'click' },
  },
} as Meta;
