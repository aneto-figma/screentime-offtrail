import { useNavigate, useLocation } from 'react-router-dom'
import IconButton from '../IconButton/IconButton'
import Logo from '../Logo/Logo'
import NavTab from '../NavTab/NavTab'
import './Nav.css'

const navItems = [
  { key: 'Home', icon: 'home', label: 'Home', path: '/home' },
  { key: 'Map', icon: 'location', label: 'Map', path: '/map' },
  { key: 'Profile', icon: 'user', label: 'Profile', path: '/profile' },
]

export default function Nav({
  active,
  className = '',
}) {
  const navigate = useNavigate()
  const location = useLocation()

  // Derive active tab from the URL when not explicitly provided
  const activeKey =
    active ??
    navItems.find((item) => item.path === location.pathname)?.key ??
    'Home'

  return (
    <div className={`nav ${className}`}>
      <div className="nav__header">
        <Logo className="nav__logo" />
        <IconButton
          glyph="search"
          variant="neutral"
          size="small"
          className="nav__search"
          type="button"
          aria-label="Search"
          onClick={() => navigate('/map')}
        />
      </div>
      <div className="nav__items">
        {navItems.map((item) => (
          <NavTab
            key={item.key}
            icon={item.icon}
            label={item.label}
            active={activeKey === item.key}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </div>
  )
}
