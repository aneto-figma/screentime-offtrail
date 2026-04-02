import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4121-2264",
  {
    props: {
      active: figma.enum("Active", {
        "True": true,
        "False": false,
      }),
    },
    example: ({ active }) => <NavTab icon="home" active={active} />,
    imports: ["import NavTab from '@/components/NavTab'"],
  }
)
