import CardGuide from './CardGuide'
import portraitSrc from '../../assets/images/portraits/Portrait-01.png'

export default {
  title: 'Components/CardGuide',
  component: CardGuide,
  argTypes: {
    name: { control: 'text' },
    category: { control: 'text' },
    src: { control: 'text' },
  },
}

export const Default = {
  args: {
    src: portraitSrc,
    name: 'Amelia B.',
    category: 'SURFING',
  },
}
