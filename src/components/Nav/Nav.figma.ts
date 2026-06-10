// url=https://figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=676-11335

import figma from "figma"

const active = figma.selectedInstance.getEnum("Active", {
  Home: "Home",
  Map: "Map",
  Profile: "Profile",
})

export default {
  id: "Nav",
  imports: ["import Nav from '@/components/Nav'"],
  example: figma.code`<Nav${figma.helpers.react.renderProp(
    "active",
    active,
  )}/>`,
  metadata: { nestable: true },
}
