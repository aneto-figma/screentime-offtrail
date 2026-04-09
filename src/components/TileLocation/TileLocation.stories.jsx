import TileLocation from './TileLocation'

export default {
  title: 'Components/Tiles/TileLocation',
  component: TileLocation,
  argTypes: {
    location: { control: 'text' },
  },
}

export const Default = {
  args: {
    location: 'Ventura, CA',
  },
}
