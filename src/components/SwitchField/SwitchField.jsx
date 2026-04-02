import './SwitchField.css'

export default function SwitchField({
  label = 'Label',
  description = 'Description',
  active = true,
  showDescription = true,
  className = '',
}) {
  const wrapperClasses = ['switch-field', className].filter(Boolean).join(' ')
  const toggleClasses = ['switch-field__toggle', active ? 'switch-field__toggle--active' : ''].filter(Boolean).join(' ')
  const knobClasses = ['switch-field__knob', active ? 'switch-field__knob--active' : ''].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      <div className="switch-field__text">
        <p className="switch-field__label">{label}</p>
        {showDescription && <p className="switch-field__description">{description}</p>}
      </div>
      <button className={toggleClasses} role="switch" aria-checked={active} type="button">
        <span className={knobClasses} />
      </button>
    </div>
  )
}
