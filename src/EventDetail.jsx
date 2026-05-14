import { useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import IconButton from './components/IconButton/IconButton'
import TileCallout from './components/TileCallout/TileCallout'
import TileDate from './components/TileDate/TileDate'
import Avatar from './components/Avatar/Avatar'
import MapView from './components/MapView/MapView'
import Button from './components/Button/Button'
import Facepile from './components/Facepile/Facepile'
import Carousel from './components/Carousel/Carousel'
import EventNav from './components/EventNav/EventNav'
import { getEvent } from './data/events'
import './EventDetail.css'

const TRANSITION_MS = 280

export default function EventDetail() {
  const navigate = useNavigate()
  const { eventId } = useParams()
  const event = getEvent(eventId)
  const [exiting, setExiting] = useState(false)

  const handleBack = useCallback(() => {
    if (exiting) return
    setExiting(true)
    window.setTimeout(() => navigate(-1), TRANSITION_MS)
  }, [exiting, navigate])

  const classes = ['event-detail', exiting && 'event-detail--exiting']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {/* Hero */}
      <header className="event-detail__hero">
        <img
          className="event-detail__hero-image"
          src={event.hero}
          alt={event.title}
        />
        <div className="event-detail__hero-scrim" />

        <div className="event-detail__title-bar">
          <IconButton
            glyph="caret"
            variant="neutral"
            size="medium"
            onClick={handleBack}
            aria-label="Back"
            className="event-detail__back"
          />
          <IconButton
            glyph="share"
            variant="neutral"
            size="medium"
            aria-label="Share event"
          />
        </div>

        <h1 className="event-detail__title">{event.title}</h1>
      </header>

      {/* Body */}
      <div className="event-detail__content">
        {/* Good to Know */}
        <section className="event-detail__section">
          <p className="event-detail__label">Good to know</p>
          <Carousel className="event-detail__callouts">
            <TileCallout
              variant="Subtle"
              label="Attendees"
              value={event.attendees}
            />
            <TileCallout
              variant="Subtle"
              label="Duration"
              value={event.duration}
            />
            <TileCallout
              variant="Subtle"
              label="Group size"
              value={event.groupSize}
            />
          </Carousel>
        </section>

        {/* When */}
        <section className="event-detail__section">
          <p className="event-detail__label">WHEN</p>
          <div className="event-detail__when">
            <TileDate month={event.month} day={event.day} />
            <div className="event-detail__when-text">
              <p>{event.dateLong}</p>
              <p>{event.time}</p>
            </div>
          </div>
        </section>

        {/* Hosted By */}
        <section className="event-detail__section">
          <p className="event-detail__label">HOSTED BY</p>
          <div className="event-detail__host">
            <Avatar src={event.host.avatar} alt={event.host.name} size={56} />
            <p className="event-detail__host-name">{event.host.name}</p>
          </div>
        </section>

        {/* Description */}
        <section className="event-detail__section">
          <p className="event-detail__label">DESCRIPTION</p>
          <p className="event-detail__description">{event.description}</p>
        </section>

        {/* Where */}
        <section className="event-detail__section">
          <p className="event-detail__label">WHERE</p>
          <div className="event-detail__where-text">
            <p className="event-detail__where-name">{event.location}</p>
            <p className="event-detail__where-address">{event.address}</p>
          </div>
          <MapView
            variant="card"
            interactive={false}
            latitude={event.latitude}
            longitude={event.longitude}
            zoom={14}
          />
        </section>

        {/* Guest List */}
        <section className="event-detail__section">
          <p className="event-detail__label">GUEST LIST</p>
          <div className="event-detail__guests">
            <Facepile>
              {event.guests.map((src, i) => (
                <Avatar key={i} src={src} alt="" size={40} />
              ))}
            </Facepile>
            <Button label="View All" colour="transparent-white" size="medium" />
          </div>
          <p className="event-detail__spots">{event.spotsLeft}</p>
        </section>
      </div>

      <EventNav
        price={event.price}
        time={event.time}
        location={event.city}
        buttonLabel={event.cta}
      />
    </div>
  )
}
