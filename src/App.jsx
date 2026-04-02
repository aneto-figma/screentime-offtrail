import Wordmark from './components/Wordmark/Wordmark'
import indexCss from './index.css?raw'
import './App.css'

const allComponentFiles = import.meta.glob('./components/*/*.jsx', { eager: false })
const componentCount = Object.keys(allComponentFiles).filter(p => !p.includes('.stories.')).length
const tokenCount = new Set(indexCss.match(/--otds-[^:;\s,)]+/g)).size

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--otds-size-gap-medium)',
      minHeight: '100vh',
      backgroundColor: 'var(--otds-bg-brand-primary)',
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
  )
}

export default App
