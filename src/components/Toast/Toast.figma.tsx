import figma from "@figma/code-connect"
import Toast from "./Toast"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=2010-559",
  {
    props: {
      message: figma.string("Message"),
    },
    example: ({ message }) => (
      <Toast message={message} />
    ),
    imports: ["import Toast from '@/components/Toast/Toast'"],
  }
)
