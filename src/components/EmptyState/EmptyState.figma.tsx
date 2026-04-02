import figma from "@figma/code-connect"
import EmptyState from "./EmptyState"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=2011-564",
  {
    props: {
      message: figma.string("Message"),
      action: figma.string("Action"),
    },
    example: ({ message, action }) => (
      <EmptyState message={message} action={action} />
    ),
    imports: ["import EmptyState from '@/components/EmptyState/EmptyState'"],
  }
)
