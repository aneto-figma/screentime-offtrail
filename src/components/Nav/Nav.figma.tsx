import figma from "@figma/code-connect";
import Nav from "./Nav";

figma.connect(
  Nav,
  "https://figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=676-11335",
  {
    example: ({ Active }) => <Nav active={Active} />,
    props: {
      Active: figma.enum("Active", {
        Home: "Home",
        Map: "Map",
        Profile: "Profile",
      }),
    },
  },
);
