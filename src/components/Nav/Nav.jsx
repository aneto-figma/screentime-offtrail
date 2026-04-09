import { useState } from 'react'
import NavTab from '../NavTab/NavTab'
import './Nav.css'

export default function Nav({
  active = 'Home',
  className = ''
}) {
  const [activeTab, setActiveTab] = useState(active)

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
            active={activeTab === item.key}
            onClick={() => setActiveTab(item.key)}
          />
        ))}
      </div>
    </div>
  )
}
