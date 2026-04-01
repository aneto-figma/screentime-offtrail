import Button from '../Button/Button'
import './EventNav.css'

export default function EventNav({
  price = 'Free',  
  time = '8:30PM–12:00AM',
  location = 'Los Angeles, CA',
  buttonLabel = 'REGISTER',
  className = ''
}) {
  return (
    <div className={`event-nav ${className}`}>
      <div className="event-nav__content">
        <div className="event-nav__info">
          <p className="event-nav__price">{price}</p>
          <p className="event-nav__time">{time}</p>
          <p className="event-nav__location">{location}</p>
        </div>
        
        <div className="event-nav__spacer" />
        
        <Button 
          label={buttonLabel}
          colour="brand"
          size="large"
          icon={true}
        />
      </div>
      
      {/* Home Indicator */}
      <div className="event-nav__home-indicator">
        <div className="event-nav__home-indicator-bar" />
      </div>
    </div>
  )
}