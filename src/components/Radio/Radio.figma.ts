// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10278

import figma from "figma"

const defaultActive = figma.selectedInstance.getEnum("Active", {
  True: true,
  False: false,
})
const label = figma.selectedInstance.getString("Label")
const description = figma.selectedInstance.getString("Description")
const showDescription = figma.selectedInstance.getBoolean("Show Description")

export default {
  id: "Radio",
  imports: ["import Radio from '@/components/Radio/Radio'"],
  example: figma.code`<Radio${figma.helpers.react.renderProp(
    "defaultActive",
    defaultActive,
  )}${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp("showDescription", showDescription)}/>`,
  metadata: { nestable: true },
}
