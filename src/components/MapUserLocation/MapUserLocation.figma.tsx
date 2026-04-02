import figma from "@figma/code-connect"
import MapUserLocation from "./MapUserLocation"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=871-2767",
  {
    example: () => <MapUserLocation size="large" />,
    imports: ["import MapUserLocation from '@/components/MapUserLocation/MapUserLocation'"],
  }
)
