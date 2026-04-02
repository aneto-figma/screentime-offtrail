import figma from "@figma/code-connect"
import MapPin from "./MapPin"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=871-2742",
  {
    example: () => <MapPin />,
    imports: ["import MapPin from '@/components/MapPin/MapPin'"],
  }
)
