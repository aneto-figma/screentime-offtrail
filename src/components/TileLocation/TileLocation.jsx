import mapBg from '../../assets/images/map/map-bg.png'
import mapPinUnionDark from '../../assets/images/map/map-pin-union-dark.png'
import mapPinVector from '../../assets/images/map/map-pin-vector.png'
import mapPinLight from '../../assets/images/map/map-pin-light.png'
import radarDarkOuter from '../../assets/images/map/radar-dark-outer.png'
import radarDarkRing from '../../assets/images/map/radar-dark-ring.png'
import radarDarkInner from '../../assets/images/map/radar-dark-inner.png'
import radarDarkMid from '../../assets/images/map/radar-dark-mid.png'
import radarLightOuter from '../../assets/images/map/radar-light-outer.png'
import radarLightRing from '../../assets/images/map/radar-light-ring.png'
import radarLightInner from '../../assets/images/map/radar-light-inner.png'
import radarLightMid from '../../assets/images/map/radar-light-mid.png'
import './TileLocation.css'

const modeClassMap = {
  Dark: 'tile-location--dark',
  Light: 'tile-location--light',
}

function MapPinDark() {
  return (
    <div className="tile-location__pin">
      <img className="tile-location__pin-union" src={mapPinUnionDark} alt="" />
      <img className="tile-location__pin-vector" src={mapPinVector} alt="" />
    </div>
  )
}

function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function TileLocation({
  location = 'Location',
  mode = 'Dark',
  className = '',
}) {
  const classes = ['tile-location', modeClassMap[mode], className].filter(Boolean).join(' ')

  return (
    <div className={classes}>

      {/* Map background */}
      <div className="tile-location__map">
        <img className="tile-location__map-bg" src={mapBg} alt="" />
        <div className="tile-location__map-overlay" />
        {mode === 'Dark' && <MapPinDark />}
        {mode === 'Light' && <img className="tile-location__pin-light" src={mapPinLight} alt="" />}
      </div>

      {/* Radar rings */}
      <div className="tile-location__radar">
        <img className="tile-location__radar-outer" src={mode === 'Dark' ? radarDarkOuter : radarLightOuter} alt="" />
        <img className="tile-location__radar-ring"  src={mode === 'Dark' ? radarDarkRing  : radarLightRing}  alt="" />
        <img className="tile-location__radar-mid"   src={mode === 'Dark' ? radarDarkMid   : radarLightMid}   alt="" />
        <img className="tile-location__radar-inner" src={mode === 'Dark' ? radarDarkInner : radarLightInner} alt="" />
      </div>

      {/* Text content */}
      <div className="tile-location__content">
        <p className="tile-location__eyebrow">Events Nearby</p>
        <p className="tile-location__location">{location}</p>
      </div>

      {/* CTA */}
      <div className="tile-location__cta">
        <p className="tile-location__cta-label">View Map</p>
        <ChevronRight />
      </div>

    </div>
  )
}

TileLocation.modes = Object.keys(modeClassMap)
