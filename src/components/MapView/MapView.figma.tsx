import figma from "@figma/code-connect"
import MapView from "./MapView"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4143-6986",
  {
    props: {
      mode: figma.enum("Mode", {
        Dark: "Dark",
        Light: "Light",
      }),
    },
    example: ({ mode }) => (
      <MapView
        mode={mode}
        variant="full"
        latitude={34.07}
        longitude={-118.25}
        zoom={12}
        markers={[
          { id: '1', lng: -118.27, lat: 34.09 },
          { id: '2', lng: -118.22, lat: 34.06 },
        ]}
      />
    ),
    imports: ["import MapView from '@/components/MapView/MapView'"],
  }
)

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=874-3762",
  {
    props: {
      mode: figma.enum("Mode", {
        Dark: "Dark",
        Light: "Light",
      }),
    },
    example: ({ mode }) => (
      <MapView
        mode={mode}
        variant="card"
        interactive={false}
        latitude={34.07}
        longitude={-118.25}
        zoom={14}
      />
    ),
    imports: ["import MapView from '@/components/MapView/MapView'"],
  }
)
