import './CardEvent.css'
import Icon from '../Icon/Icon'
import TileDate from '../TileDate/TileDate'

export default function CardEvent({
  src,
  title = 'Weekend Surf Session',
  location = 'Ventura, CA',
  people = '12',
  time = '6:30AM – 1:00PM',
  month = 'Jun',
  day = '12',
  size = 'large',
  overlay = '',
  className = '',
}) {
  const classes = [
    'card-event',
    `card-event--${size}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className="card-event__image-wrap">
        <img className="card-event__image" src={src} alt={title} />
        {size === 'large' && overlay && (
          <div className="card-event__overlay">{overlay}</div>
        )}
      </div>
      <div className="card-event__info">
        <div className="card-event__content">
          <p className="card-event__title">{title}</p>
          <p className="card-event__location">{location}</p>
          <div className="card-event__meta">
            <div className="card-event__people">
              <Icon glyph="person" />
              <p className="card-event__meta-text">{people}</p>
            </div>
            <div className="card-event__dot" />
            <p className="card-event__meta-text">{time}</p>
          </div>
        </div>
        <TileDate month={month} day={day} />
      </div>
    </div>
  )
}

CardEvent.sizes = ['large', 'small']
