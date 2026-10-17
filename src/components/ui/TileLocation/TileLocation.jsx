const radarDarkOuter = '/assets/c64b1.png'
const radarDarkRing = '/assets/f75ce.png'
const radarDarkInner = '/assets/26517.svg'
const radarDarkMid = '/assets/3e2f9.png'
const radarLightOuter = 'https://static.figma.com/uploads/2d76fa3ec4b81a2424623ecd56ff52bbe1238b55'
const radarLightRing = 'https://static.figma.com/uploads/b1d4f8a6ff5564acc75c4ade622d6cf57e0d4f03'
const radarLightInner = 'https://static.figma.com/uploads/603552d22f3c9c0f9cadb42cedb3c4fbc862581f'
const radarLightMid = 'https://static.figma.com/uploads/c0c0bacb2a0cb55fddfa438795199591efaf0cc8'
import MapView from '../MapView/MapView'
import MapPin from '../MapPin/MapPin'
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
  latitude = 34.07,
  longitude = -118.25,
  mode = 'Dark',
  snapshotSrc,
  className = '',
  onClick,
}) {
  const radar = radarImages[mode]
  const classes = [
    'tile-location',
    `tile-location--${mode.toLowerCase()}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} onClick={onClick} role={onClick ? 'button' : undefined} style={onClick ? { cursor: 'pointer' } : undefined}>

      {/* Map background — centered on the marker; CSS anchors its center
          to (right: 64px, bottom: 54px) of the tile */}
      {snapshotSrc ? (
        <img className="tile-location__map-snapshot" src={snapshotSrc} alt="" />
      ) : (
        <MapView
          className="tile-location__map"
          variant="full"
          mode={mode}
          latitude={latitude}
          longitude={longitude}
          zoom={14}
          interactive={false}
          showUserLocation={false}
          labels={false}
        />
      )}
      <div className="tile-location__overlay" />

      {/* Radar rings */}
      <div className="tile-location__radar">
        <img className="tile-location__radar-outer" src={radar.outer} alt="" />
        <img className="tile-location__radar-ring"  src={radar.ring}  alt="" />
        <img className="tile-location__radar-mid"   src={radar.mid}   alt="" />
        <img className="tile-location__radar-inner" src={radar.inner} alt="" />
      </div>

      {/* Marker pin — anchored to the same point as the radar centers,
          layered above the radar so the radar-mid ring doesn't cover it */}
      <div className="tile-location__pin">
        <MapPin />
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
