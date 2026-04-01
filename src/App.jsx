import Wordmark from './components/Wordmark/Wordmark'
import './App.css'

function App() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'var(--otds-bg-brand-primary)',
    }}>
      <Wordmark />
    </div>
  )
}

export default App
