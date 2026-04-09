import { useState } from 'react'
import './Chip.css'

export default function Chip({
  label = 'Tag',
  active: initialActive = false,
  className = '',
}) {
  const [active, setActive] = useState(initialActive)

  const classes = [
    'chip',
    active ? 'chip--active' : 'chip--inactive',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button className={classes} onClick={() => setActive(a => !a)}>
      {label}
    </button>
  )
}
