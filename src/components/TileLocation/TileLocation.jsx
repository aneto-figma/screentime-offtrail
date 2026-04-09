import mapBg from '../../assets/images/map/map-bg.png'
import radarDarkOuter from '../../assets/images/map/radar-dark-outer.png'
import radarDarkRing from '../../assets/images/map/radar-dark-ring.png'
import radarDarkInner from '../../assets/images/map/radar-dark-inner.png'
import radarDarkMid from '../../assets/images/map/radar-dark-mid.png'
import radarLightOuter from '../../assets/images/map/radar-light-outer.png'
import radarLightRing from '../../assets/images/map/radar-light-ring.png'
import radarLightInner from '../../assets/images/map/radar-light-inner.png'
import radarLightMid from '../../assets/images/map/radar-light-mid.png'
import MapPin from '../MapPin/MapPin'
import useSystemMode from '../../hooks/useSystemMode'
import './TileLocation.css'

const radarImages = {
  Dark: { outer: radarDarkOuter, ring: radarDarkRing, mid: radarDarkMid, inner: radarDarkInner },
  Light: { outer: radarLightOuter, ring: radarLightRing, mid: radarLightMid, inner: radarLightInner },
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
  className = '',
}) {
  const mode = useSystemMode()
  const radar = radarImages[mode]
  const classes = ['tile-location', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>

      {/* Map background */}
      <div className="tile-location__map">
        <img className="tile-location__map-bg" src={mapBg} alt="" />
        <div className="tile-location__map-overlay" />
        <MapPin className="tile-location__pin" />
      </div>

      {/* Radar rings */}
      <div className="tile-location__radar">
        <img className="tile-location__radar-outer" src={radar.outer} alt="" />
        <img className="tile-location__radar-ring"  src={radar.ring}  alt="" />
        <img className="tile-location__radar-mid"   src={radar.mid}   alt="" />
        <img className="tile-location__radar-inner" src={radar.inner} alt="" />
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
