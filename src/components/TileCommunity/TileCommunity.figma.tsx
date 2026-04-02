import figma from "@figma/code-connect"
import TileCommunity from "./TileCommunity"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=424-701",
  {
    props: {
      activity: figma.string("Activity"),
      count: figma.string("Count"),
    },
    example: ({ activity, count }) => (
      <TileCommunity activity={activity} count={count} />
    ),
    imports: ["import TileCommunity from '@/components/TileCommunity/TileCommunity'"],
  }
)
