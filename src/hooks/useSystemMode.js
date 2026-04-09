import { useState, useEffect } from 'react'

const query = '(prefers-color-scheme: dark)'

export default function useSystemMode() {
  const [mode, setMode] = useState(
    () => window.matchMedia(query).matches ? 'Dark' : 'Light'
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e) => setMode(e.matches ? 'Dark' : 'Light')
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return mode
}
