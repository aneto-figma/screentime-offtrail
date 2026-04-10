import { useState, useCallback, useRef } from 'react'
import Map, { Marker } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapPin from '../MapPin/MapPin'
import MapUserLocation from '../MapUserLocation/MapUserLocation'
import { MAP_STYLES } from './mapStyles'
import useSystemMode from '../../hooks/useSystemMode'
import './MapView.css'

const variantClassMap = {
  full: 'map-view--full',
  card: 'map-view--card',
}

export default function MapView({
  longitude = -118.25,
  latitude = 34.07,
  zoom = 12,
  interactive = true,
  variant = 'full',
  labels = true,
  markers = [],
  showUserLocation = true,
  onMarkerClick,
  accessToken,
  className = '',
}) {
  const token = accessToken || import.meta.env.VITE_MAPBOX_TOKEN
  const mapRef = useRef()
  const mode = useSystemMode()

  const [viewState, setViewState] = useState({
    longitude,
    latitude,
    zoom,
  })

  const handleMove = useCallback((evt) => {
    setViewState(evt.viewState)
  }, [])

  const style = MAP_STYLES[mode]

  const applyMapConfig = useCallback(() => {
    const map = mapRef.current?.getMap()
    if (!map || !style.config) return

    const config = labels
      ? style.config
      : { ...style.config, showPlaceLabels: false, showPointOfInterestLabels: false, showTransitLabels: false }

    const apply = () => {
      for (const [key, value] of Object.entries(config)) {
        map.setConfigProperty('basemap', key, value)
      }
    }

    if (map.isStyleLoaded()) {
      apply()
    } else {
      map.once('style.load', apply)
    }
  }, [style.config, labels])

  const classes = [
    'map-view',
    variantClassMap[variant],
    className,
  ].filter(Boolean).join(' ')

  if (!token) {
    return (
      <div className={classes}>
        <div className="map-view__fallback">
          <p className="map-view__fallback-text">Map requires a Mapbox access token</p>
        </div>
      </div>
    )
  }

  return (
    <div className={classes}>
      <Map
        ref={mapRef}
        {...viewState}
        onMove={interactive ? handleMove : undefined}
        mapboxAccessToken={token}
        mapStyle={style.url}
        onLoad={applyMapConfig}
        interactive={interactive}
        attributionControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Map pin markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            longitude={marker.lng}
            latitude={marker.lat}
            anchor="bottom"
            onClick={() => onMarkerClick?.(marker)}
          >
            <MapPin />
          </Marker>
        ))}

        {/* User location indicator */}
        {showUserLocation && (
          <Marker
            longitude={longitude}
            latitude={latitude}
            anchor="center"
          >
            <MapUserLocation size={variant === 'card' ? 'small' : 'large'} />
          </Marker>
        )}
      </Map>

      {/* Top shade gradient */}
      <div
        className="map-view__shade"
        style={{
          background: `linear-gradient(to bottom, ${style.shadeFrom}, ${style.shadeTo})`,
        }}
      />
    </div>
  )
}

MapView.variants = Object.keys(variantClassMap)
