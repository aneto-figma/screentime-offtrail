import Avatar from './components/Avatar/Avatar'
import Button from './components/Button/Button'
import TileCallout from './components/TileCallout/TileCallout'
import CardEvent from './components/CardEvent/CardEvent'
import Nav from './components/Nav/Nav'
import './Profile.css'

import imgAvatar from './assets/images/portraits/Portrait-05.png'
import imgUpcoming from './assets/images/event/Event-54.png'
import imgPast from './assets/images/event/Event-55.png'

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__content">
        {/* Avatar + identity */}
        <section className="profile__avatar-section">
          <div className="profile__header">
            <div className="profile__user">
              <p className="profile__name">Kaley B.</p>
              <p className="profile__location">Los Angeles, CA</p>
            </div>
            <Avatar src={imgAvatar} alt="Kaley B." size={80} />
          </div>
          <div className="profile__actions">
            <Button label="Edit" colour="transparent-white" size="medium" />
            <Button label="Share" colour="transparent-white" size="medium" />
          </div>
        </section>

        {/* Event highlights */}
        <section className="profile__stats">
          <TileCallout variant="Highlight" label="HOSTED" value="12" />
          <TileCallout variant="Highlight" label="FOLLOWERS" value="148" />
          <TileCallout variant="Highlight" label="HOST RATING" value="4.9" />
        </section>

        {/* Upcoming events */}
        <section className="profile__section">
          <p className="profile__section-title">Upcoming events</p>
          <CardEvent
            src={imgUpcoming}
            title="Morning Run Meetup"
            location="Aliso Summit Trail, CA"
            people="64"
            time="3:00PM – 4:30PM"
            size="large"
            month="JUN"
            day="14"
          />
        </section>

        {/* Past events */}
        <section className="profile__section">
          <p className="profile__section-title">Past events</p>
          <CardEvent
            src={imgPast}
            title="Horseback in Topanga"
            location="Topanga, CA"
            people="35"
            time="5:45PM – 7:45PM"
            size="large"
            month="JUN"
            day="20"
          />
        </section>
      </div>

      <Nav active="Profile" />
    </div>
  )
}
