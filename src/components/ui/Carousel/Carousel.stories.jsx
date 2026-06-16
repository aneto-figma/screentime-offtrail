import Carousel from './Carousel'
import CardGuide from '../CardGuide/CardGuide'
import Chip from '../Chip/Chip'
import portraitSrc from '../../../assets/images/portraits/Portrait-05.png'
import portraitSrc2 from '../../../assets/images/portraits/Portrait-12.png'
import portraitSrc3 from '../../../assets/images/portraits/Portrait-13.png'

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    title: { control: 'text' },
    linkLabel: { control: 'text' },
  },
}

export const WithGuides = {
  args: {
    title: 'Guides',
  },
  render: (args) => (
    <Carousel {...args}>
      <CardGuide src={portraitSrc} name="Amelia B." category="SURFING" />
      <CardGuide src={portraitSrc2} name="Teresa M." category="MEDITATION" />
      <CardGuide src={portraitSrc3} name="Karim N." category="HIKING" />
      <CardGuide src={portraitSrc} name="Jordan L." category="CLIMBING" />
    </Carousel>
  ),
}

export const WithChips = {
  args: {
    title: 'Categories',
    linkLabel: 'See all',
  },
  render: (args) => (
    <Carousel {...args}>
      <Chip label="Hiking" active />
      <Chip label="Surfing" />
      <Chip label="Climbing" />
      <Chip label="Meditation" />
      <Chip label="Running" />
      <Chip label="Cycling" />
    </Carousel>
  ),
}

export const MobileWidth = {
  ...WithGuides,
  decorators: [
    (Story) => (
      <div style={{ width: 390, maxWidth: '100%' }}>
        {Story()}
      </div>
    ),
  ],
}

export const DesktopWidth = {
  ...WithGuides,
  decorators: [
    (Story) => (
      <div style={{ width: 760, maxWidth: '100%' }}>
        {Story()}
      </div>
    ),
  ],
}
