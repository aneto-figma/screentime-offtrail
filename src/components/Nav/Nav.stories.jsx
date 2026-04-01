import Nav from './Nav'

export default {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {
    active: {
      control: 'select',
      options: ['Home', 'Map', 'Profile'],
    },
  },
}

export const Home = {
  args: {
    active: 'Home',
  },
}

export const Map = {
  args: {
    active: 'Map',
  },
}

export const Profile = {
  args: {
    active: 'Profile',
  },
}
