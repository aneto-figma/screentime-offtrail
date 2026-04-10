import './Carousel.css'

export default function Carousel({
  title,
  linkLabel = 'View all',
  children,
  className = '',
}) {
  const classes = ['carousel', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {title && (
        <div className="carousel__header">
          <p className="carousel__title">{title}</p>
          <p className="carousel__link">{linkLabel}</p>
        </div>
      )}
      <div className="carousel__track">
        {children}
      </div>
    </div>
  )
}
