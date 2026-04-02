import './Radio.css'

export default function Radio({
  label = 'Label',
  description = 'Description',
  active = true,
  showDescription = true,
  className = '',
}) {
  const wrapperClasses = ['radio', className].filter(Boolean).join(' ')
  const circleClasses = ['radio__circle', active ? 'radio__circle--active' : ''].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      <div className={circleClasses}>
        {active && <span className="radio__dot" />}
      </div>
      <div className="radio__text">
        <p className="radio__label">{label}</p>
        {showDescription && <p className="radio__description">{description}</p>}
      </div>
    </div>
  )
}
