import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=424-1729",
  {
    props: {
      title: figma.string("Title"),
      location: figma.string("Location"),
      people: figma.string("People"),
      time: figma.string("Time"),
      overlay: figma.string("Overlay"),
      size: figma.enum("Size", {
        Large: "large",
        Small: "small",
      }),
    },
    example: ({ title, location, people, time, overlay, size }) => (
      <CardEvent
        src="/path/to/event.jpg"
        title={title}
        location={location}
        people={people}
        time={time}
        size={size}
        overlay={overlay}
        month="Jun"
        day="12"
      />
    ),
    imports: ["import CardEvent from '@/components/CardEvent'"],
  }
)
