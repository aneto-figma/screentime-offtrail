import figma from "@figma/code-connect";
import EventNav from "./EventNav";

figma.connect(
  EventNav,
  "https://figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=677-4860",
  {
    example: () => (
      <EventNav
        price="Free"
        time="8:30PM–12:00AM"
        location="Los Angeles, CA"
        buttonLabel="REGISTER"
      />
    ),
  },
);
