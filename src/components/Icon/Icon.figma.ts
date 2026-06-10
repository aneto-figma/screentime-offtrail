// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10029

import figma from "figma"

const glyph = figma.selectedInstance.getEnum("Glpyh", {
  X: "x",
  Check: "check",
  Info: "info",
  Warning: "warning",
  Plus: "plus",
  out: "out",
  question: "question",
  "caret-down": "caret-down",
  "caret-up": "caret-up",
})

export default {
  id: "Icon",
  imports: ["import Icon from '@/components/Icon'"],
  example: figma.code`<Icon${figma.helpers.react.renderProp("glyph", glyph)}/>`,
  metadata: { nestable: true },
}
