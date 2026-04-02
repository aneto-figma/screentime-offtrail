import BrandIcon from '../BrandIcon/BrandIcon'
import './SearchInput.css'

const stateClassMap = {
  Placeholder: 'search-input--placeholder',
  Active: 'search-input--active',
}

export default function SearchInput({
  text = 'Find things to do...',
  state = 'Placeholder',
  className = '',
}) {
  const classes = ['search-input', stateClassMap[state], className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <BrandIcon glyph="search" className="search-input__icon" />
      <p className="search-input__text">{text}</p>
    </div>
  )
}

SearchInput.states = Object.keys(stateClassMap)
