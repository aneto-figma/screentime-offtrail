import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=2031-594",
  {
    props: {
      label: figma.string("Label"),
      colour: figma.enum("Colour", {
        Brand: "brand",
        "Transparent White": "transparent-white",
        "Transparent Black": "transparent-black",
      }),
      size: figma.enum("Size", {
        Large: "large",
        Medium: "medium",
      }),
      icon: figma.boolean("Icon"),
    },
    example: ({ label, colour, size, icon }) => (
      <Button label={label} colour={colour} size={size} icon={icon} />
    ),
    imports: ["import Button from '@/components/Button'"],
  }
)
