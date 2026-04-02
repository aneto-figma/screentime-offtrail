import figma from "@figma/code-connect"
import TileDate from "./TileDate"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=424-1717",
  {
    props: {
      month: figma.string("Month"),
      day: figma.string("Day"),
    },
    example: ({ month, day }) => (
      <TileDate month={month} day={day} />
    ),
    imports: ["import TileDate from '@/components/TileDate/TileDate'"],
  }
)
