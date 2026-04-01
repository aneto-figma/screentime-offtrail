import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10151",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Outline: "outline",
        Neutral: "neutral",
      }),
      size: figma.enum("Size", {
        Medium: "medium",
        Small: "small",
      }),
      disabled: figma.enum("State", {
        Default: false,
        Disabled: true,
      }),
    },
    example: ({ variant, size, disabled }) => (
      <IconButton glyph="caret" variant={variant} size={size} disabled={disabled} />
    ),
    imports: ["import IconButton from '@/components/IconButton'"],
  }
)
