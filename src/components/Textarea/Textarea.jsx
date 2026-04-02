import './Textarea.css'

export default function Textarea({
  label = 'Label',
  description = 'Description',
  showLabel = true,
  hasDescription = true,
  value = 'Value',
  className = '',
}) {
  const wrapperClasses = ['textarea', className].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      {showLabel && <p className="textarea__label">{label}</p>}
      <div className="textarea__box">
        <p className="textarea__value">{value}</p>
      </div>
      {hasDescription && <p className="textarea__description">{description}</p>}
    </div>
  )
}
