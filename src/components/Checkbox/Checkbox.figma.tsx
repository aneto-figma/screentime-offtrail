import figma from "@figma/code-connect"
import Checkbox from "./Checkbox"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=645-574",
  {
    props: {
      active: figma.enum("Active", {
        True: true,
        False: false,
      }),
      label: figma.string("Label"),
      description: figma.string("Description"),
      showDescription: figma.boolean("Show Description"),
    },
    example: ({ active, label, description, showDescription }) => (
      <Checkbox
        active={active}
        label={label}
        description={description}
        showDescription={showDescription}
      />
    ),
    imports: ["import Checkbox from '@/components/Checkbox/Checkbox'"],
  }
)
