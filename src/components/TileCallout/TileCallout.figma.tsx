import figma from "@figma/code-connect"
import TileCallout from "./TileCallout"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=788-5366",
  {
    props: {
      variant: figma.enum("Variant", {
        Subtle: "Subtle",
        Highlight: "Highlight",
      }),
      label: figma.string("Label"),
      value: figma.string("Value"),
    },
    example: ({ variant, label, value }) => (
      <TileCallout variant={variant} label={label} value={value} />
    ),
    imports: ["import TileCallout from '@/components/TileCallout/TileCallout'"],
  }
)
