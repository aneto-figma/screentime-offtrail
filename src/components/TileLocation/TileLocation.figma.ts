// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4143-7035

import figma from "figma"

const location = figma.selectedInstance.getString("Location")

export default {
  id: "TileLocation",
  imports: [
    "import TileLocation from '@/components/TileLocation/TileLocation'",
  ],
  example: figma.code`<TileLocation${figma.helpers.react.renderProp(
    "location",
    location,
  )} latitude={34.27} longitude={-119.23}/>`,
  metadata: { nestable: true },
}
