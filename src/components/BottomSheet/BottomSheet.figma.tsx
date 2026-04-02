import figma from "@figma/code-connect"
import BottomSheet from "./BottomSheet"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=2012-577",
  {
    props: {
      size: figma.enum("Size", {
        Default: "Default",
        Tall: "Tall",
      }),
      children: figma.children("Drawer Content"),
    },
    example: ({ size, children }) => (
      <BottomSheet size={size}>{children}</BottomSheet>
    ),
    imports: ["import BottomSheet from '@/components/BottomSheet/BottomSheet'"],
  }
)
