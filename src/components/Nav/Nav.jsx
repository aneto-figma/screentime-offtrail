import { useNavigate, useLocation } from 'react-router-dom'
import BrandIcon from '../BrandIcon/BrandIcon'
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

  const activeKey =
    active ??
    navItems.find((item) => item.path === location.pathname)?.key ??
    'Home'

  return (
    <div className={`nav ${className}`}>
      <div className="nav__header">
        <Logo className="nav__logo" />
      </div>
      <div className="nav__search-container">
        <BrandIcon glyph="search" className="nav__search-icon" />
        <input
          type="text"
          className="nav__search-input"
          placeholder="Search"
          aria-label="Search"
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
