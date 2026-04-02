import figma from "@figma/code-connect"
import Dropdown from "./Dropdown"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4130-5933",
  {
    props: {
      state: figma.enum("State", {
        Placeholder: "Placeholder",
        Active: "Active",
      }),
      label: figma.string("Label"),
      value: figma.string("Value"),
      showLabel: figma.boolean("Show Label"),
      description: figma.string("Description"),
      showDescription: figma.boolean("Show Description"),
    },
    example: ({ state, label, value, showLabel, description, showDescription }) => (
      <Dropdown
        state={state}
        label={label}
        value={value}
        showLabel={showLabel}
        description={description}
        showDescription={showDescription}
      />
    ),
    imports: ["import Dropdown from '@/components/Dropdown/Dropdown'"],
  }
)
