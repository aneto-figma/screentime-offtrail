import Chip from './Chip'

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export const Active = {
  args: {
    label: 'Tag',
    active: true,
  },
}

export const Inactive = {
  args: {
    label: 'Tag',
    active: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
