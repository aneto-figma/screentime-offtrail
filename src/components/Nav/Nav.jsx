import BrandIcon from '../BrandIcon/BrandIcon'
import './Nav.css'

export default function Nav({ 
  active = 'Home',
  className = '' 
}) {
  const navItems = [
    { key: 'Home', icon: 'home' },
    { key: 'Map', icon: 'search' },
    { key: 'Profile', icon: 'user' }
  ]

  return (
    <div className={`nav ${className}`}>
      {/* Home Indicator */}
      <div className="nav__home-indicator">
        <div className="nav__home-indicator-bar" />
      </div>
      
      {/* Navigation Items */}
      <div className="nav__items">
        {navItems.map((item) => (
          <div 
            key={item.key}
            className={`nav__item ${active === item.key ? 'nav__item--active' : ''}`}
          >
            <div className="nav__item-indicator" />
            <BrandIcon glyph={item.icon} className="nav__item-icon" />
          </div>
        ))}
      </div>
    </div>
  )
}