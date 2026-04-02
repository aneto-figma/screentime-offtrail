import figma from "@figma/code-connect"

figma.connect(
  "https://figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=676-11335",
  {
    props: {
      active: figma.enum("Active", {
        Home: "Home",
        Map: "Map",
        Profile: "Profile",
      }),
    },
    example: ({ active }) => <Nav active={active} />,
    imports: ["import Nav from '@/components/Nav'"],
  }
)
