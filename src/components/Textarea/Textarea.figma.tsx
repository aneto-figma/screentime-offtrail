import figma from "@figma/code-connect"
import Textarea from "./Textarea"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10212",
  {
    props: {
      label: figma.string("Label"),
      defaultValue: figma.string("Value"),
      placeholder: figma.string("Value"),
      showLabel: figma.boolean("Show Label"),
      description: figma.string("Description"),
      hasDescription: figma.boolean("Has Description"),
    },
    example: ({ label, defaultValue, placeholder, showLabel, description, hasDescription }) => (
      <Textarea
        label={label}
        defaultValue={defaultValue}
        placeholder={placeholder}
        showLabel={showLabel}
        description={description}
        hasDescription={hasDescription}
      />
    ),
    imports: ["import Textarea from '@/components/Textarea/Textarea'"],
  }
)
