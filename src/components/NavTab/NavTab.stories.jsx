import NavTab from './NavTab'
import BrandIcon from '../BrandIcon/BrandIcon'

export default {
  title: 'Components/NavTab',
  component: NavTab,
  argTypes: {
    icon: {
      control: 'select',
      options: BrandIcon.glyphs,
    },
    active: {
      control: 'boolean',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#10071b' },
      ],
    },
  },
}

export const Default = {
  args: {
    icon: 'home',
    active: false,
  },
}

export const Active = {
  args: {
    icon: 'home',
    active: true,
  },
}

export const Search = {
  args: {
    icon: 'search',
    active: false,
  },
}

export const Profile = {
  args: {
    icon: 'user',
    active: true,
  },
}
