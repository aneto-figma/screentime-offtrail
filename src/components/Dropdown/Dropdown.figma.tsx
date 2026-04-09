import figma from "@figma/code-connect"
import Dropdown from "./Dropdown"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4130-5933",
  {
    props: {
      label: figma.string("Label"),
      placeholder: figma.string("Value"),
      showLabel: figma.boolean("Show Label"),
      description: figma.string("Description"),
      showDescription: figma.boolean("Show Description"),
    },
    example: ({ label, placeholder, showLabel, description, showDescription }) => (
      <Dropdown
        label={label}
        placeholder={placeholder}
        showLabel={showLabel}
        description={description}
        showDescription={showDescription}
        options={[
          { value: 'one', label: 'Option One' },
          { value: 'two', label: 'Option Two' },
        ]}
      />
    ),
    imports: ["import Dropdown from '@/components/Dropdown/Dropdown'"],
  }
)
