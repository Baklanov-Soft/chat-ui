import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { TextArea, TextAreaProps } from './TextArea';

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});

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
} as Meta;
