import figma from "@figma/code-connect"
import TileLocation from "./TileLocation"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4143-7035",
  {
    props: {
      location: figma.string("Location"),
    },
    example: ({ location }) => (
      <TileLocation location={location} />
    ),
    imports: ["import TileLocation from '@/components/TileLocation/TileLocation'"],
  }
)
