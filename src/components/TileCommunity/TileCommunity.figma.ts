// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=424-701

import figma from "figma"

const activity = figma.selectedInstance.getString("Activity")
const count = figma.selectedInstance.getString("Count")

export default {
  id: "TileCommunity",
  imports: [
    "import TileCommunity from '@/components/TileCommunity/TileCommunity'",
  ],
  example: figma.code`<TileCommunity${figma.helpers.react.renderProp(
    "activity",
    activity,
  )}${figma.helpers.react.renderProp("count", count)}/>`,
  metadata: { nestable: true },
}
