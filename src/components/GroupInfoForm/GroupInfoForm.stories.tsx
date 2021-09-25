import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { GroupInfoForm, GroupInfoFormProps } from './GroupInfoForm';

const Template: Story<GroupInfoFormProps> = (args) => (
  <GroupInfoForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  avatar:
    'https://3.bp.blogspot.com/-yTF-5A3kAH8/WlCLjrizoeI/AAAAAAAC68Q/BxEnavDjqWYLI22b2rTOdA6wVUIwEIkjACLcBGAs/s1600/dfgh.jpg',
  name: 'Group name',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi repellat ullam nostrum explicabo molestiae?',
  members: [
    {
      id: 'q',
      avatar: 'https://pbs.twimg.com/media/EmeZZQxU4AAKDYx.jpg',
      name: 'booba',
    },
    {
      id: 'w',
      avatar: 'https://pbs.twimg.com/media/EmeZZQxU4AAKDYx.jpg',
      name: 'booba',
    },
    {
      id: 'e',
      avatar: 'https://pbs.twimg.com/media/EmeZZQxU4AAKDYx.jpg',
      name: 'booba',
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  avatar:
    'https://2.bp.blogspot.com/-h1CQoRzhz1U/WlCLjnSurrI/AAAAAAAC68U/Kds5_SHPQsEI7UqNaixC1CZT6CbqjhOHgCLcBGAs/s1600/image.jpg',
  name: 'Group name',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi repellat ullam nostrum explicabo molestiae?',
};

const WidthDecorator = styled.div`
  width: 500px;
`;

export default {
  title: 'forms/GroupInfoForm',
  component: GroupInfoForm,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
  argTypes: {
    onInviteMemberClick: { action: 'click' },
    onLeaveClick: { action: 'click' },
  },
} as Meta;
