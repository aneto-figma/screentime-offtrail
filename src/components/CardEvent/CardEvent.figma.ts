// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=424-1729

import figma from "figma"

const title = figma.selectedInstance.getString("Title")
const location = figma.selectedInstance.getString("Location")
const people = figma.selectedInstance.getString("People")
const time = figma.selectedInstance.getString("Time")
const overlay = figma.selectedInstance.getString("Overlay")
const size = figma.selectedInstance.getEnum("Size", {
  Large: "large",
  Small: "small",
})

export default {
  id: "CardEvent",
  imports: ["import CardEvent from '@/components/CardEvent'"],
  example: figma.code`<CardEvent src="/path/to/event.jpg"${figma.helpers.react.renderProp(
    "title",
    title,
  )}${figma.helpers.react.renderProp(
    "location",
    location,
  )}${figma.helpers.react.renderProp(
    "people",
    people,
  )}${figma.helpers.react.renderProp(
    "time",
    time,
  )}${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "overlay",
    overlay,
  )} month="Jun" day="12"/>`,
  metadata: { nestable: true },
}
