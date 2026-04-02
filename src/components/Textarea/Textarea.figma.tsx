import figma from "@figma/code-connect"
import Textarea from "./Textarea"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10212",
  {
    props: {
      label: figma.string("Label"),
      value: figma.string("Value"),
      showLabel: figma.boolean("Show Label"),
      description: figma.string("Description"),
      hasDescription: figma.boolean("Has Description"),
    },
    example: ({ label, value, showLabel, description, hasDescription }) => (
      <Textarea
        label={label}
        value={value}
        showLabel={showLabel}
        description={description}
        hasDescription={hasDescription}
      />
    ),
    imports: ["import Textarea from '@/components/Textarea/Textarea'"],
  }
)
