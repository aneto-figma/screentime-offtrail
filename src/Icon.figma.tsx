import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10029",
  {
    props: {
      glyph: figma.enum("Glpyh", {
        X: "x",
        Check: "check",
        Info: "info",
        Warning: "warning",
        Plus: "plus",
        out: "out",
        question: "question",
        "caret-down": "caret-down",
        "caret-up": "caret-up",
      }),
    },
    example: ({ glyph }) => <Icon glyph={glyph} />,
    imports: ["import Icon from '@/Icon'"],
  }
)
