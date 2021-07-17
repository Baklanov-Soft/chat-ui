import { Meta, Story } from '@storybook/react';
import { MessageEntry, MessageEntryProps } from './MessageEntry';
import styled from 'styled-components';

const Template: Story<MessageEntryProps> = (args) => <MessageEntry {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  avatar:
    'https://3.bp.blogspot.com/-yTF-5A3kAH8/WlCLjrizoeI/AAAAAAAC68Q/BxEnavDjqWYLI22b2rTOdA6wVUIwEIkjACLcBGAs/s1600/dfgh.jpg',
  user: 'Rarity',
  text:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatum illo at accusantium maiores ratione?',
  ts: new Date(1624464230),
};

const WidthDecorator = styled.div`
  width: 600px;
`;

export default {
  title: 'Message entry',
  component: MessageEntry,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
  argTypes: {
    onSelected: { action: 'selection changed' },
  },
} as Meta;
