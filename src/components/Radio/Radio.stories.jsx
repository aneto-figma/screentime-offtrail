import Radio from './Radio'

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    active: { control: 'boolean' },
    showDescription: { control: 'boolean' },
  },
}

export const Active = {
  args: {
    label: 'Label',
    description: 'Description',
    active: true,
    showDescription: true,
  },
}

export const Inactive = {
  args: {
    label: 'Label',
    description: 'Description',
    active: false,
    showDescription: true,
  },
}

export const WithoutDescription = {
  args: {
    label: 'Label',
    active: true,
    showDescription: false,
  },
}
