import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
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

const WidthDecorator = styled.div`
  width: 230px;
`;

export default {
  title: 'Textbox',
  component: Textbox,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
} as Meta;
