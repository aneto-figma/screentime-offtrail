import { useState, useEffect, useCallback } from 'react'

// iOS 13+ requires an explicit permission request for DeviceOrientationEvent
function needsPermission() {
  return (
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof DeviceOrientationEvent.requestPermission === 'function'
  )
}

export default function useCompassBearing() {
  const [bearing, setBearing] = useState(null)
  const [permission, setPermission] = useState(() =>
    needsPermission() ? 'prompt' : 'granted'
  )
  const [supported, setSupported] = useState(null)

  const handleOrientation = useCallback((event) => {
    // iOS: webkitCompassHeading is a true compass bearing (0–360°, clockwise from north)
    if (typeof event.webkitCompassHeading === 'number') {
      setBearing(Math.round(event.webkitCompassHeading))
      setSupported(true)
      return
    }
    // Android: deviceorientationabsolute gives alpha where 0 = North, counterclockwise
    // Convert to clockwise compass bearing
    if (event.alpha !== null && event.alpha !== undefined) {
      setBearing(Math.round((360 - event.alpha) % 360))
      setSupported(true)
    } else {
      setSupported(false)
    }
  }, [])

  // Must be called from a user gesture on iOS — do not call automatically
  const requestPermission = useCallback(async () => {
    if (!needsPermission()) return
    try {
      const result = await DeviceOrientationEvent.requestPermission()
      setPermission(result)
    } catch {
      setPermission('denied')
    }
  }, [])

  useEffect(() => {
    if (permission !== 'granted') return
    if (typeof window === 'undefined' || !window.DeviceOrientationEvent) {
      setSupported(false)
      return
    }

    // Prefer deviceorientationabsolute (Android) — gives heading relative to true north.
    // Fallback to deviceorientation which includes webkitCompassHeading on iOS.
    const eventName = 'ondeviceorientationabsolute' in window
      ? 'deviceorientationabsolute'
      : 'deviceorientation'

    window.addEventListener(eventName, handleOrientation, { passive: true })
    return () => window.removeEventListener(eventName, handleOrientation)
  }, [permission, handleOrientation])

  return { bearing, permission, supported, requestPermission }
}
