import figma from "@figma/code-connect"
import TextInput from "./TextInput"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10222",
  {
    props: {
      label: figma.string("Label"),
      defaultValue: figma.string("Value"),
      placeholder: figma.string("Value"),
      showLabel: figma.boolean("Show Label"),
      description: figma.string("Description"),
      showDescription: figma.boolean("Show Description"),
    },
    example: ({ label, defaultValue, placeholder, showLabel, description, showDescription }) => (
      <TextInput
        label={label}
        defaultValue={defaultValue}
        placeholder={placeholder}
        showLabel={showLabel}
        description={description}
        showDescription={showDescription}
      />
    ),
    imports: ["import TextInput from '@/components/TextInput/TextInput'"],
  }
)
