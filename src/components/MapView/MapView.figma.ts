// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4143-6986

import figma from "figma"

export default {
  id: "MapView",
  imports: ["import MapView from '@/components/MapView/MapView'"],
  example: figma.code`<MapView variant="full" latitude={34.07} longitude={-118.25} zoom={12} markers={[
        { id: '1', lng: -118.27, lat: 34.09 },
        { id: '2', lng: -118.22, lat: 34.06 },
    ]}/>`,
}
