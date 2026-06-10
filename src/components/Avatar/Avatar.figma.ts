// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-9939

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  "32": 32,
  "40": 40,
  "56": 56,
  "80": 80,
})

export default {
  id: "Avatar",
  imports: ["import Avatar from '@/components/Avatar'"],
  example: figma.code`<Avatar src="/path/to/avatar.jpg"${figma.helpers.react.renderProp(
    "size",
    size,
  )}/>`,
  metadata: { nestable: true },
}
