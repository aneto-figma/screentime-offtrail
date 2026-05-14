import MapView from './components/MapView/MapView'
import SearchInput from './components/SearchInput/SearchInput'
import Chip from './components/Chip/Chip'
import BottomSheet from './components/BottomSheet/BottomSheet'
import CardEvent from './components/CardEvent/CardEvent'
import Nav from './components/Nav/Nav'
import './Map.css'

import imgSurf from './assets/images/event/Event-02.png'
import imgMorningRun from './assets/images/event/Event-54.png'
import imgHorseback from './assets/images/event/Event-55.png'

const FILTERS = ['For You', 'Yoga', 'Surfing', 'Biking', 'Meditation']

const EVENTS = [
  {
    id: 1,
    src: imgSurf,
    title: 'Weekend Surf Session',
    location: 'VENTURA, CA',
    people: '12',
    time: '6:30AM – 1:00PM',
    month: 'JUN',
    day: '12',
  },
  {
    id: 2,
    src: imgMorningRun,
    title: 'Morning Run Meetup',
    location: 'ALISO SUMMIT TRAIL, CA',
    people: '64',
    time: '3:00PM – 4:30PM',
    month: 'JUN',
    day: '14',
  },
  {
    id: 3,
    src: imgHorseback,
    title: 'Horseback in Topanga',
    location: 'TOPANGA, CA',
    people: '35',
    time: '5:45PM – 7:45PM',
    month: 'JUN',
    day: '20',
  },
]

export default function Map() {
  return (
    <div className="map-screen">
      <div className="map-screen__map-region">
        <MapView
          className="map-screen__map"
          variant="full"
          latitude={34.07}
          longitude={-118.25}
          zoom={12}
          interactive={true}
          showUserLocation={true}
          markers={[
            { id: '1', lng: -118.27, lat: 34.09 },
            { id: '2', lng: -118.22, lat: 34.06 },
          ]}
        />

        <div className="map-screen__search">
          <SearchInput placeholder="Find things to do..." />
        </div>

        <div className="map-screen__tabs">
          {FILTERS.map((label, i) => (
            <Chip key={label} label={label} active={i === 0} />
          ))}
        </div>
      </div>

      <BottomSheet size="Default" className="map-screen__sheet">
        <div className="map-screen__events">
          {EVENTS.map((event) => (
            <CardEvent
              key={event.id}
              size="small"
              src={event.src}
              title={event.title}
              location={event.location}
              people={event.people}
              time={event.time}
              month={event.month}
              day={event.day}
            />
          ))}
        </div>
      </BottomSheet>

      <Nav active="Map" />
    </div>
  )
}
