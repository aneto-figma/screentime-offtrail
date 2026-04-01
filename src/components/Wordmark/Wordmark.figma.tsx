import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10132",
  {
    example: () => <Wordmark />,
    imports: ["import Wordmark from '@/components/Wordmark'"],
  }
)
