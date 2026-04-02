import figma from "@figma/code-connect"
import TextInput from "./TextInput"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10222",
  {
    props: {
      state: figma.enum("State", {
        Default: "Default",
        Empty: "Empty",
      }),
      label: figma.string("Label"),
      value: figma.string("Value"),
      showLabel: figma.boolean("Show Label"),
      description: figma.string("Description"),
      showDescription: figma.boolean("Show Description"),
    },
    example: ({ state, label, value, showLabel, description, showDescription }) => (
      <TextInput
        state={state}
        label={label}
        value={value}
        showLabel={showLabel}
        description={description}
        showDescription={showDescription}
      />
    ),
    imports: ["import TextInput from '@/components/TextInput/TextInput'"],
  }
)
