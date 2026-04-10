import Logo from './components/Logo/Logo'
import Button from './components/Button/Button'
import heroImage from './assets/images/landing-hero.png'
import './App.css'

function App() {
  return (
    <div className="landing">
      <div className="landing__content">
        <div className="landing__hero">
          <img
            className="landing__hero-image"
            src={heroImage}
            alt="Hikers walking along a mountain trail"
          />
          <div className="landing__scrim" />
          <Logo className="landing__logo" />
          <div className="landing__text">
            <p className="landing__text-primary">Welcome to Offtrail.</p>
            <p className="landing__text-secondary">
              A community built for those who take the scenic route.
            </p>
          </div>
          <div className="landing__buttons">
            <Button label="Sign Up" colour="brand" size="large" />
            <Button label="SIGN IN" colour="transparent-white" size="large" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
