import { Meta, Story } from '@storybook/react';
import { GroupEntry, GroupEntryProps } from './GroupEntry';

const Template: Story<GroupEntryProps> = (args) => <GroupEntry {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'CSS lovers',
  avatar:
    'https://3.bp.blogspot.com/-yTF-5A3kAH8/WlCLjrizoeI/AAAAAAAC68Q/BxEnavDjqWYLI22b2rTOdA6wVUIwEIkjACLcBGAs/s1600/dfgh.jpg',
  lastMessage: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, natus!',
    ts: new Date(1624455311),
  },
  unreaded: 3,
  selected: false,
  id: 1,
};

export const Selected = Template.bind({});
Selected.args = {
  title: 'CSS lovers',
  avatar:
    'https://2.bp.blogspot.com/-h1CQoRzhz1U/WlCLjnSurrI/AAAAAAAC68U/Kds5_SHPQsEI7UqNaixC1CZT6CbqjhOHgCLcBGAs/s1600/image.jpg',
  lastMessage: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, natus!',
    ts: new Date(1624455311),
  },
  selected: true,
  id: 2,
};

export default {
  title: 'Group entry',
  component: GroupEntry,
  argTypes: {
    onSelected: { action: 'selection changed' },
  },
} as Meta;
