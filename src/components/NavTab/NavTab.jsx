import BrandIcon from '../BrandIcon/BrandIcon'
import './NavTab.css'

export default function NavTab({
  icon = 'home',
  active = false,
  className = ''
}) {
  return (
    <div className={`nav-tab ${active ? 'nav-tab--active' : ''} ${className}`}>
      <div className="nav-tab__indicator" />
      <BrandIcon glyph={icon} className="nav-tab__icon" />
    </div>
  )
}
