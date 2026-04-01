import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=670-1399",
  {
    props: {
      glyph: figma.enum("Glyph", {
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
      }),
    },
    example: ({ glyph }) => <BrandIcon glyph={glyph} />,
    imports: ["import BrandIcon from '@/components/BrandIcon'"],
  }
)
