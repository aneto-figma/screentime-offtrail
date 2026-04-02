import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=786-4220",
  {
    props: {
      label: figma.string("Label"),
      active: figma.boolean("Active"),
    },
    example: ({ label, active }) => (
      <Chip label={label} active={active} />
    ),
    imports: ["import Chip from '@/components/Chip'"],
  }
)
