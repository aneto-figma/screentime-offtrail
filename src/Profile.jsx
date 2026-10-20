import { useNavigate } from 'react-router-dom'
import Avatar from './components/ui/Avatar/Avatar'
import Button from './components/ui/Button/Button'
import TileCommunity from './components/ui/TileCommunity/TileCommunity'
import CardEvent from './components/ui/CardEvent/CardEvent'
import AppShell from './components/ui/AppShell/AppShell'
import DesktopTopNav from './components/ui/DesktopTopNav/DesktopTopNav'
import { getEvent } from './data/events'
import './Profile.css'

const assetPathPrefix = '/assets/profile'
const imgAvatar = `${assetPathPrefix}/e57d0.png`
const imgMorningRun = `${assetPathPrefix}/a0183.png`
const imgHorseback = `${assetPathPrefix}/48f10.png`
const imgHosted = `${assetPathPrefix}/16061.svg`
const imgFollowers = `${assetPathPrefix}/6934f.svg`
const imgRating = `${assetPathPrefix}/92fa1.svg`
const imgPeople = `${assetPathPrefix}/d87ee.svg`
const imgSeparator = `${assetPathPrefix}/86b1a.svg`

const upcoming = getEvent('morning-run')
const past = getEvent('horseback')

export default function Profile() {
  const navigate = useNavigate()
  const openEvent = (id) => navigate(`/event/${id}`)

  return (
    <AppShell active="Profile" className="profile" contentClassName="profile__content">
        <DesktopTopNav tone="dark" />
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
            <Button label="Edit" colour="reverse" size="medium" />
            <Button label="Share" colour="transparent-white" size="medium" />
          </div>
          <div className="profile__stats">
            <TileCommunity activity="HOSTED" count="12" iconSrc={imgHosted} />
            <TileCommunity activity="FOLLOWERS" count="148" iconSrc={imgFollowers} />
            <TileCommunity activity="HOST RATING" count="4.9" iconSrc={imgRating} />
          </div>
        </section>

        {/* Upcoming events */}
        <section className="profile__section">
          <p className="profile__section-title">Upcoming events</p>
          <CardEvent
            src={imgMorningRun}
            title={upcoming.title}
            location={upcoming.location}
            people={upcoming.people}
            time={upcoming.time}
            size="large"
            month={upcoming.month}
            day={upcoming.day}
            peopleIconSrc={imgPeople}
            separatorSrc={imgSeparator}
            onClick={() => openEvent(upcoming.id)}
          />
        </section>

        {/* Past events */}
        <section className="profile__section profile__section--past">
          <p className="profile__section-title">Past events</p>
          <CardEvent
            src={imgHorseback}
            title={past.title}
            location={past.location}
            people={past.people}
            time={past.time}
            size="large"
            month={past.month}
            day={past.day}
            peopleIconSrc={imgPeople}
            separatorSrc={imgSeparator}
            className="profile__past-mobile"
            onClick={() => openEvent(past.id)}
          />
          <CardEvent
            src={imgHorseback}
            title={past.title}
            location={past.location}
            people={past.people}
            time={past.time}
            size="small"
            month={past.month}
            day={past.day}
            peopleIconSrc={imgPeople}
            separatorSrc={imgSeparator}
            className="profile__past-desktop"
            onClick={() => openEvent(past.id)}
          />
        </section>
    </AppShell>
  )
}
