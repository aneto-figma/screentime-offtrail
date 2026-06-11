import { useNavigate } from 'react-router-dom'
import Logo from './components/Logo/Logo'
import BrandIcon from './components/BrandIcon/BrandIcon'
import TileWeather from './components/TileWeather/TileWeather'
import CardEvent from './components/CardEvent/CardEvent'
import CardGuide from './components/CardGuide/CardGuide'
import Carousel from './components/Carousel/Carousel'
import TileLocation from './components/TileLocation/TileLocation'
import AppShell from './components/AppShell/AppShell'
import { getEvent } from './data/events'
import './Home.css'

import imgAmelia from './assets/images/portraits/Portrait-05.png'
import imgTeresa from './assets/images/portraits/Portrait-12.png'
import imgKarim from './assets/images/portraits/Portrait-13.png'

const featured = getEvent('canyon-crew')
const morningRun = getEvent('morning-run')
const horseback = getEvent('horseback')
const weekendSurf = getEvent('weekend-surf')

export default function Home() {
  const navigate = useNavigate()
  const openEvent = (id) => navigate(`/event/${id}`)

  return (
    <AppShell active="Home" className="home" contentClassName="home__content">
        <div className="home__header">
          <Logo />
          <BrandIcon glyph="search" />
        </div>

        {/* Events Nearby + Weather */}
        <div className="home__section home__section--top">
          <TileLocation location="Los Angeles" />
          <TileWeather
            time="3:43PM"
            conditions="Light Rain"
            temp="65°F"
            low="42°"
            high="67°"
          />
        </div>

        {/* Guides */}
        <div className="home__section home__section--guides">
          <Carousel title="Guides">
            <CardGuide src={imgAmelia} name="Amelia B." category="SURFING" />
            <CardGuide src={imgTeresa} name="Teresa M." category="MEDITATION" />
            <CardGuide src={imgKarim} name="Karim N." category="HIKING" />
          </Carousel>
        </div>

        {/* Featured */}
        <div className="home__section home__section--featured">
          <p className="home__section-title">Featured</p>
          <CardEvent
            src={featured.src}
            title={featured.title}
            location={featured.location}
            people={featured.people}
            time={featured.time}
            size="large"
            overlay={featured.overlay}
            month={featured.month}
            day={featured.day}
            onClick={() => openEvent(featured.id)}
          />
        </div>

        {/* Upcoming Events */}
        <div className="home__section home__section--upcoming">
          <p className="home__section-title">Upcoming Events</p>
          <div className="home__events">
            <CardEvent
              src={morningRun.src}
              title={morningRun.title}
              location={morningRun.location}
              people={morningRun.people}
              time={morningRun.time}
              size="large"
              month={morningRun.month}
              day={morningRun.day}
              onClick={() => openEvent(morningRun.id)}
            />
            <CardEvent
              src={horseback.src}
              title={horseback.title}
              location={horseback.location}
              people={horseback.people}
              time={horseback.time}
              size="large"
              month={horseback.month}
              day={horseback.day}
              onClick={() => openEvent(horseback.id)}
            />
            <CardEvent
              src={weekendSurf.src}
              title={weekendSurf.title}
              location={weekendSurf.location}
              people={weekendSurf.people}
              time={weekendSurf.time}
              size="large"
              overlay="Group Surf"
              month={weekendSurf.month}
              day={weekendSurf.day}
              onClick={() => openEvent(weekendSurf.id)}
            />
          </div>
        </div>
    </AppShell>
  )
}
