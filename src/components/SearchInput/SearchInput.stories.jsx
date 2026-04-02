import SearchInput from './SearchInput'

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  argTypes: {
    text: { control: 'text' },
    state: { control: 'select', options: SearchInput.states },
  },
}

export const Placeholder = {
  args: {
    text: 'Find things to do...',
    state: 'Placeholder',
  },
}

export const Active = {
  args: {
    text: 'Hiking trails',
    state: 'Active',
  },
}
