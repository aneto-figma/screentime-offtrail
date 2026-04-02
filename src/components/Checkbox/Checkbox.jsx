import Icon from '../Icon/Icon'
import './Checkbox.css'

export default function Checkbox({
  label = 'Label',
  description = 'Description',
  active = true,
  showDescription = true,
  className = '',
}) {
  const wrapperClasses = ['checkbox', className].filter(Boolean).join(' ')
  const boxClasses = ['checkbox__box', active ? 'checkbox__box--active' : ''].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      <div className="checkbox__row">
        <div className={boxClasses}>
          {active && <Icon glyph="check" className="checkbox__check" />}
        </div>
        <p className="checkbox__label">{label}</p>
      </div>
      {showDescription && (
        <div className="checkbox__description-row">
          <p className="checkbox__description">{description}</p>
        </div>
      )}
    </div>
  )
}
