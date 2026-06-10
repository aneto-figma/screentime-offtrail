// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=670-1399

import figma from "figma"

const glyph = figma.selectedInstance.getEnum("Glyph", {
  Home: "home",
  Search: "search",
  User: "user",
  Clouds: "clouds",
  Rain: "rain",
  Sun: "sun",
  Lightning: "lightning",
  Bolt: "bolt",
  Wind: "wind",
  Calendar: "calendar",
  Compass: "compass",
  Map: "map",
  Location: "location",
  Close: "close",
  "Frame 2147239245": "settings",
  Share: "share",
  Save: "save",
  "Arrow Back": "arrow-back",
  Caret: "caret",
  "Arrow Down": "arrow-down",
  "Arrow Up": "arrow-up",
  "Arrow Left": "arrow-left",
  "Arrow Right": "arrow-right",
})

export default {
  id: "BrandIcon",
  imports: ["import BrandIcon from '@/components/BrandIcon'"],
  example: figma.code`<BrandIcon${figma.helpers.react.renderProp(
    "glyph",
    glyph,
  )}/>`,
  metadata: { nestable: true },
}
