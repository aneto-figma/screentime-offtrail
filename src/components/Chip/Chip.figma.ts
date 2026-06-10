// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=786-4220

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const active = figma.selectedInstance.getBoolean("Active")

export default {
  id: "Chip",
  imports: ["import Chip from '@/components/Chip'"],
  example: figma.code`<Chip${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp("active", active)}/>`,
  metadata: { nestable: true },
}
