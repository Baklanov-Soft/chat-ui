import { Meta, Story } from '@storybook/react';
import { Upload, UploadProps } from './Upload';

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Choose a file',
};

export default {
  title: 'Upload',
  component: Upload,
} as Meta;
