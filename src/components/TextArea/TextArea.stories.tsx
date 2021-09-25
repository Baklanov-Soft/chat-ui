import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { TextArea, TextAreaProps } from './TextArea';

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  html: 'hello world',
};

const WidthDecorator = styled.div`
  width: 300px;
`;

export default {
  title: 'TextArea',
  component: TextArea,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
  argTypes: {
    onSend: { action: 'send' },
  },
} as Meta;
