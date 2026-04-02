import './TextInput.css'

const stateClassMap = {
  Default: 'text-input--default',
  Empty: 'text-input--empty',
}

export default function TextInput({
  label = 'Label',
  description = 'Description',
  showLabel = true,
  showDescription = true,
  state = 'Default',
  value = 'Value',
  placeholder = 'Value',
  className = '',
}) {
  const wrapperClasses = ['text-input', className].filter(Boolean).join(' ')
  const inputClasses = ['text-input__input', stateClassMap[state]].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      {showLabel && <p className="text-input__label">{label}</p>}
      <div className={inputClasses}>
        <p className="text-input__value">{state === 'Empty' ? placeholder : value}</p>
      </div>
      {showDescription && <p className="text-input__description">{description}</p>}
    </div>
  )
}

TextInput.states = Object.keys(stateClassMap)
