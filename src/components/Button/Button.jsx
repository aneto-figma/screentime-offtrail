import Icon from '../Icon/Icon'
import './Button.css'

const colourClassMap = {
  brand: 'button--brand',
  'transparent-white': 'button--transparent-white',
  'transparent-black': 'button--transparent-black',
}

export default function Button({
  label = 'Button',
  colour = 'brand',
  size = 'large',
  icon = false,
  className = '',
}) {
  const classes = [
    'button',
    colourClassMap[colour],
    `button--${size}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <button className={classes}>
      {label}
      {icon && <Icon glyph="out" className="button__icon" />}
    </button>
  )
}

Button.colours = Object.keys(colourClassMap)
Button.sizes = ['large', 'medium']
