// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=786-3037

import figma from "figma"

const time = figma.selectedInstance.getString("Time")
const conditions = figma.selectedInstance.getString("Conditions")
const temp = figma.selectedInstance.getString("Temp")
const low = figma.selectedInstance.getString("Low")
const high = figma.selectedInstance.getString("High")

export default {
  id: "TileWeather",
  imports: ["import TileWeather from '@/components/TileWeather/TileWeather'"],
  example: figma.code`<TileWeather${figma.helpers.react.renderProp(
    "time",
    time,
  )}${figma.helpers.react.renderProp(
    "conditions",
    conditions,
  )}${figma.helpers.react.renderProp(
    "temp",
    temp,
  )}${figma.helpers.react.renderProp(
    "low",
    low,
  )}${figma.helpers.react.renderProp("high", high)}/>`,
  metadata: { nestable: true },
}
