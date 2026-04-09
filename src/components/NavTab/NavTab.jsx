import BrandIcon from '../BrandIcon/BrandIcon'
import './NavTab.css'

export default function NavTab({
  icon = 'home',
  active = false,
  onClick,
  className = ''
}) {
  return (
    <button
      type="button"
      className={`nav-tab ${active ? 'nav-tab--active' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="nav-tab__indicator" />
      <BrandIcon glyph={icon} className="nav-tab__icon" />
    </button>
  )
}
