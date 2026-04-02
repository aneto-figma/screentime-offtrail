import './Chip.css'

export default function Chip({
  label = 'Tag',
  active = false,
  className = '',
}) {
  const classes = [
    'chip',
    active ? 'chip--active' : 'chip--inactive',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button className={classes}>
      {label}
    </button>
  )
}
