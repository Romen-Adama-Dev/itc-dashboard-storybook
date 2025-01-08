import { Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    label: { control: 'text' },
    type: {
      control: 'radio',
      options: ['button', 'submit'],
    },
  },
} as Meta<ButtonComponent>;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  type: 'button',
};

export const Submit = Template.bind({});
Submit.args = {
  label: 'Submit',
  type: 'submit',
};
