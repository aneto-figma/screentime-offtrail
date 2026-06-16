// Shared event data used across Home, Map, Profile, and EventDetail screens.
// Tapping a CardEvent navigates to /event/:id which looks up the entry by id here.

import imgCanyonCrew from '../assets/images/event/Event-01.png'
import imgWeekendSurf from '../assets/images/event/Event-02.png'
import imgTrailRun from '../assets/images/event/Event-04.png'
import imgMorningRun from '../assets/images/event/Event-54.png'
import imgHorseback from '../assets/images/event/Event-55.png'

import imgHost1 from '../assets/images/portraits/Portrait-01.png'
import imgHost2 from '../assets/images/portraits/Portrait-02.png'
import imgHost3 from '../assets/images/portraits/Portrait-03.png'
import imgHost4 from '../assets/images/portraits/Portrait-04.png'
import imgHost6 from '../assets/images/portraits/Portrait-06.png'
import imgHost7 from '../assets/images/portraits/Portrait-07.png'
import imgHost8 from '../assets/images/portraits/Portrait-08.png'
import imgHost9 from '../assets/images/portraits/Portrait-09.png'
import imgHost10 from '../assets/images/portraits/Portrait-10.png'
import imgHost11 from '../assets/images/portraits/Portrait-11.png'

const defaultGuests = [imgHost7, imgHost8, imgHost9, imgHost10]

export const events = [
  {
    id: 'trail-run',
    title: 'Trail Run Meetup',
    location: 'Griffith Park',
    address: '3401 Riverside Dr, Los Angeles, CA',
    city: 'Los Angeles, CA',
    latitude: 34.1365,
    longitude: -118.2941,
    people: '24',
    time: '8:30PM – 12:00AM',
    month: 'JUL',
    day: '22',
    dateLong: 'Friday July 22 in Los Angeles',
    src: imgTrailRun,
    hero: imgTrailRun,
    description: 'Join a fast-paced trail run in Rio de Los Angeles State Park. Expect to run in the 8-minute mile range, with moderate incline. Bring water and sunscreen!',
    host: { name: 'Jesse Gonzalez', avatar: imgHost1 },
    attendees: '24',
    duration: '2.5 Hrs',
    groupSize: 'Large',
    guests: defaultGuests,
    spotsLeft: '5 spots left',
    price: 'Free',
    cta: 'REGISTER',
  },
  {
    id: 'morning-run',
    title: 'Morning Run Meetup',
    location: 'Aliso Summit Trail, CA',
    address: 'Aliso Summit Trail, Aliso Viejo, CA',
    city: 'Aliso Viejo, CA',
    latitude: 33.5839,
    longitude: -117.7261,
    people: '64',
    time: '3:00PM – 4:30PM',
    month: 'JUN',
    day: '14',
    dateLong: 'Friday June 14 in Aliso Viejo',
    src: imgMorningRun,
    hero: imgMorningRun,
    description: 'Easy social run along Aliso Summit Trail with stair training at the end. All paces welcome — we regroup at each turn so nobody runs alone.',
    host: { name: 'Mei Tanaka', avatar: imgHost2 },
    attendees: '64',
    duration: '1.5 Hrs',
    groupSize: 'Large',
    guests: defaultGuests,
    spotsLeft: '12 spots left',
    price: 'Free',
    cta: 'REGISTER',
  },
  {
    id: 'horseback',
    title: 'High Desert Horseback Ride',
    subtitle: 'Desert views, steady pace',
    location: 'Mammoth Lakes, CA',
    address: 'Sherwin Creek, Mammoth Lakes, CA',
    city: 'Mammoth Lakes, CA',
    latitude: 37.6308,
    longitude: -118.9664,
    people: '35',
    time: '10:00AM – 2:00PM',
    month: 'FEB',
    day: '16',
    dateLong: 'Monday February 16 in Mammoth Lakes',
    src: imgHorseback,
    hero: imgHorseback,
    description: 'Join us for a relaxed group ride through open desert terrain just outside Mammoth Lakes. This route winds through rolling hills and open meadow, offering panoramic views and a steady, approachable pace. All levels are welcome — whether you have ridden before or this is your first time in the saddle. Helmets are provided. Bring water, closed-toe shoes, and layers.',
    host: { name: 'Jenna Lee', avatar: imgHost3 },
    attendees: '35',
    duration: '4 Hrs',
    groupSize: 'Small',
    guests: defaultGuests,
    spotsLeft: '24 open spots',
    price: '$45',
    cta: 'REGISTER',
  },
  {
    id: 'weekend-surf',
    title: 'Weekend Surf Session',
    location: 'Ventura, CA',
    address: 'Surfers Point, Ventura, CA',
    city: 'Ventura, CA',
    latitude: 34.2746,
    longitude: -119.2967,
    people: '12',
    time: '6:30AM – 1:00PM',
    month: 'JUN',
    day: '12',
    dateLong: 'Saturday June 12 in Ventura',
    src: imgWeekendSurf,
    hero: imgWeekendSurf,
    description: 'Long-form Saturday session at Surfers Point. Coffee at the parking lot at 6:30am, dawn patrol, then breakfast tacos after. Boards and wetsuits provided if needed.',
    host: { name: 'Amelia Brooks', avatar: imgHost4 },
    attendees: '12',
    duration: '6.5 Hrs',
    groupSize: 'Small',
    guests: defaultGuests,
    spotsLeft: '4 spots left',
    price: 'Free',
    cta: 'JOIN',
  },
  {
    id: 'canyon-crew',
    title: 'Canyon Crew Meetup',
    location: 'Topanga, CA',
    address: 'Topanga Lookout Trailhead, Topanga, CA',
    city: 'Topanga, CA',
    latitude: 34.0928,
    longitude: -118.6035,
    people: '35',
    time: '5:45PM – 7:45PM',
    month: 'JUN',
    day: '12',
    dateLong: 'Sunday June 12 in Topanga',
    src: imgCanyonCrew,
    hero: imgCanyonCrew,
    overlay: 'Canyon crew meetup',
    description: 'Sunset crew hike up Topanga Lookout. Steady incline with a 360° view at the top. We hang out at the summit for golden hour then head down by headlamp.',
    host: { name: 'Sam Reyes', avatar: imgHost6 },
    attendees: '35',
    duration: '2 Hrs',
    groupSize: 'Medium',
    guests: [imgHost9, imgHost10, imgHost11],
    spotsLeft: '8 spots left',
    price: 'Free',
    cta: 'REGISTER',
  },
]

const byId = new Map(events.map((event) => [event.id, event]))

export function getEvent(id) {
  return byId.get(id) ?? events[0]
}
