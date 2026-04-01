import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import DesignOverview from './components/DesignOverview/DesignOverview'
import PageHeader from './components/PageHeader/PageHeader'
import Nav from './components/Nav/Nav'
import EventNav from './components/EventNav/EventNav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [view, setView] = useState('home')

  if (view === 'design') {
    return (
      <>
        <nav className="app-nav">
          <button onClick={() => setView('home')}>Home</button>
          <button className="active" onClick={() => setView('design')}>Design System</button>
          <button onClick={() => setView('components')}>Components</button>
        </nav>
        <DesignOverview />
      </>
    )
  }

  if (view === 'components') {
    return (
      <>
        <nav className="app-nav">
        <button onClick={() => setView('components')}>Components</button>
          <button onClick={() => setView('home')}>Home</button>
          <button onClick={() => setView('design')}>Design System</button>
          <button className="active" onClick={() => setView('components')}>Components</button>
        </nav>
        <div style={{ padding: '20px', background: '#10071b', minHeight: '100vh' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Page Header</h2>
            <PageHeader title="Explore Trails" showShareButton={true} />
          </div>
          
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Navigation (Home Active)</h2>
            <Nav active="Home" />
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Navigation (Map Active)</h2>
            <Nav active="Map" />
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Navigation (Profile Active)</h2>
            <Nav active="Profile" />
          </div>
          
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Event Navigation</h2>
            <EventNav 
              price="Free"
              time="8:30PM–12:00AM"
              location="Los Angeles, CA"
              buttonLabel="REGISTER"
            />
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Event Navigation (Paid Event)</h2>
            <EventNav 
              price="$25"
              time="7:00PM–11:30PM"
              location="San Francisco, CA"
              buttonLabel="BUY TICKETS"
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <nav className="app-nav">
        <button className="active" onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('design')}>Design System</button>
      </nav>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App
