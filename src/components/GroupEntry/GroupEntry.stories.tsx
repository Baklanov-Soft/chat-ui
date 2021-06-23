import { Meta, Story } from '@storybook/react';
import { GroupEntry, GroupEntryProps } from './GroupEntry';

const Template: Story<GroupEntryProps> = (args) => <GroupEntry {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'CSS lovers',
  avatar:
    'https://3.bp.blogspot.com/-yTF-5A3kAH8/WlCLjrizoeI/AAAAAAAC68Q/BxEnavDjqWYLI22b2rTOdA6wVUIwEIkjACLcBGAs/s1600/dfgh.jpg',
  lastMessage: {
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, natus!',
    ts: new Date(1624455311),
  },
  unreaded: 3,
  selected: false,
  id: 1,
};

export default {
  title: 'Group entry',
  component: GroupEntry,
  argTypes: {
    onSelected: { action: 'selection changed' },
  },
} as Meta;
