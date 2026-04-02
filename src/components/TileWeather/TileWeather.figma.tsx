import figma from "@figma/code-connect"
import TileWeather from "./TileWeather"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=786-3037",
  {
    props: {
      time: figma.string("Time"),
      conditions: figma.string("Conditions"),
      temp: figma.string("Temp"),
      low: figma.string("Low"),
      high: figma.string("High"),
    },
    example: ({ time, conditions, temp, low, high }) => (
      <TileWeather
        time={time}
        conditions={conditions}
        temp={temp}
        low={low}
        high={high}
      />
    ),
    imports: ["import TileWeather from '@/components/TileWeather/TileWeather'"],
  }
)
