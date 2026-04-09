import Dropdown from './Dropdown'

export default {
  title: 'Components/Form Fields/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    showLabel: { control: 'boolean' },
    showDescription: { control: 'boolean' },
    state: { control: 'select', options: Dropdown.states },
    value: { control: 'text' },
  },
}

export const Placeholder = {
  args: {
    label: 'Label',
    description: 'Description',
    state: 'Placeholder',
    value: 'Select an option',
  },
}

export const Active = {
  args: {
    label: 'Label',
    description: 'Description',
    state: 'Active',
    value: 'Selected value',
  },
}

export const WithoutLabel = {
  args: {
    label: 'Label',
    description: 'Description',
    showLabel: false,
    state: 'Placeholder',
    value: 'Select an option',
  },
}
