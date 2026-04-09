import figma from "@figma/code-connect"
import Checkbox from "./Checkbox"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=645-574",
  {
    props: {
      defaultActive: figma.enum("Active", {
        True: true,
        False: false,
      }),
      label: figma.string("Label"),
      description: figma.string("Description"),
      showDescription: figma.boolean("Show Description"),
    },
    example: ({ defaultActive, label, description, showDescription }) => (
      <Checkbox
        defaultActive={defaultActive}
        label={label}
        description={description}
        showDescription={showDescription}
      />
    ),
    imports: ["import Checkbox from '@/components/Checkbox/Checkbox'"],
  }
)
