// url=https://figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=677-4860
// component=EventNav

import figma from "figma"

export default {
  id: "EventNav",
  imports: ["import EventNav from '@/{{relativePath}}';"],
  example: figma.code`<EventNav price="Free" time="8:30PM–12:00AM" location="Los Angeles, CA" buttonLabel="REGISTER"/>`,
}
