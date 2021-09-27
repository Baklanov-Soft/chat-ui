import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Composer, ComposerProps } from './Composer';

const Template: Story<ComposerProps> = (args) => <Composer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: '',
};

const WidthDecorator = styled.div`
  width: 500px;
`;

export default {
  title: 'Composer',
  component: Composer,
  decorators: [
    (Story) => (
      <WidthDecorator>
        <Story />
      </WidthDecorator>
    ),
  ],
  argTypes: {
    onSend: { action: 'send' },
    setText: { action: 'input' },
  },
} as Meta;
