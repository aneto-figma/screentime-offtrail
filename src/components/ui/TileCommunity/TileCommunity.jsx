import BrandIcon from '../BrandIcon/BrandIcon'
import './TileCommunity.css'

export default function TileCommunity({
  activity = 'Meditation',
  count = '64',
  glyph = 'location',
  iconSrc,
  className = '',
}) {
  const classes = ['tile-community', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <p className="tile-community__activity">{activity}</p>
      <div className="tile-community__count">
        {iconSrc ? (
          <img
            className="tile-community__icon-image"
            src={iconSrc}
            alt=""
            aria-hidden="true"
          />
        ) : (
          <BrandIcon glyph={glyph} className="tile-community__icon" />
        )}
        <p className="tile-community__count-label">{count}</p>
      </div>
    </div>
  )
}
