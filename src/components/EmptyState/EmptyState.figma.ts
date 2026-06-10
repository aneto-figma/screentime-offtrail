// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=2011-564

import figma from "figma"

const message = figma.selectedInstance.getString("Message")
const action = figma.selectedInstance.getString("Action")

export default {
  id: "EmptyState",
  imports: ["import EmptyState from '@/components/EmptyState/EmptyState'"],
  example: figma.code`<EmptyState${figma.helpers.react.renderProp(
    "message",
    message,
  )}${figma.helpers.react.renderProp("action", action)}/>`,
  metadata: { nestable: true },
}
