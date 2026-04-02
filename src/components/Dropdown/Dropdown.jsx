import BrandIcon from '../BrandIcon/BrandIcon'
import './Dropdown.css'

const stateClassMap = {
  Placeholder: 'dropdown--placeholder',
  Active: 'dropdown--active',
}

export default function Dropdown({
  label = 'Label',
  description = 'Description',
  showLabel = true,
  showDescription = true,
  state = 'Placeholder',
  value = 'Value',
  className = '',
}) {
  const wrapperClasses = ['dropdown', className].filter(Boolean).join(' ')
  const inputClasses = ['dropdown__input', stateClassMap[state]].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      {showLabel && <p className="dropdown__label">{label}</p>}
      <div className={inputClasses}>
        <p className="dropdown__value">{value}</p>
        <BrandIcon glyph="caret" className="dropdown__caret" />
      </div>
      {showDescription && <p className="dropdown__description">{description}</p>}
    </div>
  )
}

Dropdown.states = Object.keys(stateClassMap)
