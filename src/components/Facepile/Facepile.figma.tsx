import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=788-4288",
  {
    props: {
      children: figma.children("Slot"),
    },
    example: ({ children }) => (
      <Facepile>
        {children}
      </Facepile>
    ),
    imports: ["import Facepile from '@/components/Facepile'"],
  }
)
