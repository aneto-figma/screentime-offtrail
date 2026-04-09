import useCompassBearing from './useCompassBearing'
import './WidgetCompass.css'

const CX = 201.5
const CY = 201.5
const TICK_OUTER_R = 161
const CARDINAL_R = 170
const DEGREE_LABEL_R = 192

const TICKS = Array.from({ length: 72 }, (_, i) => {
  const angle = i * 5
  const rad = ((angle - 90) * Math.PI) / 180
  const isCardinal = angle % 90 === 0
  const tickLen = isCardinal ? 10 : 7
  const innerR = TICK_OUTER_R - tickLen
  return {
    x1: CX + innerR * Math.cos(rad),
    y1: CY + innerR * Math.sin(rad),
    x2: CX + TICK_OUTER_R * Math.cos(rad),
    y2: CY + TICK_OUTER_R * Math.sin(rad),
    isCardinal,
  }
})

const DEGREE_LABELS = Array.from({ length: 12 }, (_, i) => {
  const angle = i * 30
  const rad = ((angle - 90) * Math.PI) / 180
  return {
    x: CX + DEGREE_LABEL_R * Math.cos(rad),
    y: CY + DEGREE_LABEL_R * Math.sin(rad),
    label: String(angle),
  }
})

const CARDINALS = ['N', 'E', 'S', 'W'].map((label, i) => {
  const angle = i * 90
  const rad = ((angle - 90) * Math.PI) / 180
  return {
    label,
    x: CX + CARDINAL_R * Math.cos(rad),
    y: CY + CARDINAL_R * Math.sin(rad),
  }
})

export default function WidgetCompass({ bearing: bearingProp = 355, live = false, className = '' }) {
  const compass = useCompassBearing()

  // Use live sensor data when available, fall back to prop until first reading arrives
  const bearing = live ? (compass.bearing ?? bearingProp) : bearingProp
  const classes = ['widget-compass', className].filter(Boolean).join(' ')

  const showPermissionPrompt = live && compass.permission === 'prompt'
  const showDenied = live && compass.permission === 'denied'
  const showUnavailable = live && compass.supported === false

  return (
    <div className={classes}>
      <div className="widget-compass__north-indicator" />

      <svg
        className="widget-compass__dial"
        style={{ transform: `rotate(${-bearing}deg)` }}
        viewBox="0 0 403 403"
        aria-hidden="true"
      >
        {TICKS.map((tick, i) => (
          <line
            key={i}
            className={`widget-compass__tick${tick.isCardinal ? ' widget-compass__tick--cardinal' : ''}`}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
          />
        ))}

        {DEGREE_LABELS.map((d) => (
          <text
            key={d.label}
            className="widget-compass__degree-label"
            x={d.x}
            y={d.y}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {d.label}
          </text>
        ))}

        {CARDINALS.map((c) => (
          <text
            key={c.label}
            className="widget-compass__cardinal"
            x={c.x}
            y={c.y}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {c.label}
          </text>
        ))}
      </svg>

      <div className="widget-compass__center">
        <p className="widget-compass__bearing">{bearing}°</p>
      </div>

      {showPermissionPrompt && (
        <div className="widget-compass__overlay">
          <button
            className="widget-compass__permission-btn"
            onClick={compass.requestPermission}
          >
            Enable Compass
          </button>
        </div>
      )}

      {(showDenied || showUnavailable) && (
        <div className="widget-compass__overlay">
          <p className="widget-compass__overlay-msg">
            {showDenied ? 'Compass access denied' : 'Compass unavailable'}
          </p>
        </div>
      )}
    </div>
  )
}
