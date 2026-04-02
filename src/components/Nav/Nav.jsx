import NavTab from '../NavTab/NavTab'
import './Nav.css'

export default function Nav({
  active = 'Home',
  className = ''
}) {
  const navItems = [
    { key: 'Home', icon: 'home' },
    { key: 'Map', icon: 'location' },
    { key: 'Profile', icon: 'user' }
  ]

  return (
    <div className={`nav ${className}`}>
      <div className="nav__items">
        {navItems.map((item) => (
          <NavTab
            key={item.key}
            icon={item.icon}
            active={active === item.key}
          />
        ))}
      </div>
    </div>
  )
}
