import Textarea from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    showLabel: { control: 'boolean' },
    hasDescription: { control: 'boolean' },
    value: { control: 'text' },
  },
}

export const Default = {
  args: {
    label: 'Label',
    description: 'Description',
    value: 'Value',
  },
}

export const WithoutLabel = {
  args: {
    label: 'Label',
    description: 'Description',
    showLabel: false,
    value: 'Value',
  },
}

export const WithoutDescription = {
  args: {
    label: 'Label',
    value: 'Value',
    hasDescription: false,
  },
}
