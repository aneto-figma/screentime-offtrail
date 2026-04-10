import Logo from './components/Logo/Logo'
import BrandIcon from './components/BrandIcon/BrandIcon'
import TileWeather from './components/TileWeather/TileWeather'
import CardEvent from './components/CardEvent/CardEvent'
import CardGuide from './components/CardGuide/CardGuide'
import Carousel from './components/Carousel/Carousel'
import TileLocation from './components/TileLocation/TileLocation'
import Nav from './components/Nav/Nav'
import './Home.css'

import imgFeatured from './assets/images/event/Event-01.png'
import imgMorningRun from './assets/images/event/Event-54.png'
import imgHorseback from './assets/images/event/Event-55.png'
import imgSurf from './assets/images/event/Event-02.png'
import imgAmelia from './assets/images/portraits/Portrait-05.png'
import imgTeresa from './assets/images/portraits/Portrait-12.png'
import imgKarim from './assets/images/portraits/Portrait-13.png'

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__header">
          <Logo />
          <BrandIcon glyph="search" />
        </div>

        {/* Location & Weather */}
        <div className="home__section home__section--location">
          <div className="home__heading">
            <p className="home__heading-label">Current Location</p>
            <p className="home__heading-title">Los Angeles</p>
          </div>
          <TileWeather
            time="3:43PM"
            conditions="Light Rain"
            temp="65°F"
            low="42°"
            high="67°"
          />
        </div>

        {/* Featured */}
        <div className="home__section home__section--featured">
          <p className="home__section-title">Featured</p>
          <CardEvent
            src={imgFeatured}
            title="Canyon Crew Meetup"
            location="Topanga, CA"
            people="35"
            time="5:45PM – 7:45PM"
            size="large"
            overlay="Canyon crew meetup"
            month="Jun"
            day="12"
          />
        </div>

        {/* Guides + Location tile */}
        <div className="home__section home__section--guides">
          <Carousel title="Guides">
            <CardGuide src={imgAmelia} name="Amelia B." category="SURFING" />
            <CardGuide src={imgTeresa} name="Teresa M." category="MEDITATION" />
            <CardGuide src={imgKarim} name="Karim N." category="HIKING" />
          </Carousel>
          <TileLocation location="Los Angeles" />
        </div>

        {/* Upcoming Events */}
        <div className="home__section home__section--upcoming">
          <p className="home__section-title">Upcoming Events</p>
          <div className="home__events">
            <CardEvent
              src={imgMorningRun}
              title="Morning Run Meetup"
              location="Aliso Summit Trail, CA"
              people="64"
              time="3:00PM – 4:30PM"
              size="large"
              month="JUN"
              day="14"
            />
            <CardEvent
              src={imgHorseback}
              title="Horseback in Topanga"
              location="Topanga, CA"
              people="35"
              time="5:45PM – 7:45PM"
              size="large"
              month="Jun"
              day="20"
            />
            <CardEvent
              src={imgSurf}
              title="Weekend Surf Session"
              location="Ventura, CA"
              people="12"
              time="6:30AM – 1:00PM"
              size="large"
              overlay="Group Surf"
              month="Jun"
              day="12"
            />
          </div>
        </div>
      </div>

      <Nav active="Home" />
    </div>
  )
}
