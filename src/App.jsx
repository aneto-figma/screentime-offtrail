import { useState, useEffect } from 'react'
import Wordmark from './components/Wordmark/Wordmark'
import MapView from './components/MapView/MapView'
import indexCss from './index.css?raw'
import './App.css'

const allComponentFiles = import.meta.glob('./components/*/*.jsx', { eager: false })
const componentCount = Object.keys(allComponentFiles).filter(p => !p.includes('.stories.')).length
const tokenCount = new Set(indexCss.match(/--otds-[^:;\s,)]+/g)).size

function useColorScheme() {
  const [dark, setDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => setDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return dark ? 'Dark' : 'Light'
}

function App() {
  const mode = useColorScheme()
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <MapView mode={mode} interactive={false} showUserLocation={false} />
      </div>
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--otds-size-gap-medium)',
        minHeight: '100vh',
      }}>
        <Wordmark />
        <p style={{
          fontFamily: 'var(--otds-font-family-sans)',
          fontSize: 'var(--otds-size-font-medium)',
          color: 'var(--otds-color-secondary)',
          margin: 0,
        }}>
          {tokenCount} tokens &middot; {componentCount} components
        </p>
      </div>
    </div>
  )
}

export default App
