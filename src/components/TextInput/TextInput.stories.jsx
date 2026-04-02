import TextInput from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    showLabel: { control: 'boolean' },
    showDescription: { control: 'boolean' },
    state: { control: 'select', options: TextInput.states },
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
}

export const Default = {
  args: {
    label: 'Label',
    description: 'Description',
    state: 'Default',
    value: 'Value',
  },
}

export const Empty = {
  args: {
    label: 'Label',
    description: 'Description',
    state: 'Empty',
    placeholder: 'Placeholder text',
  },
}

export const WithoutLabel = {
  args: {
    label: 'Label',
    description: 'Description',
    showLabel: false,
    state: 'Default',
    value: 'Value',
  },
}
