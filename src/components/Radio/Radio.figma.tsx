import figma from "@figma/code-connect"
import Radio from "./Radio"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10278",
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
      <Radio
        active={active}
        label={label}
        description={description}
        showDescription={showDescription}
      />
    ),
    imports: ["import Radio from '@/components/Radio/Radio'"],
  }
)
