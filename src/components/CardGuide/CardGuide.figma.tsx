import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=424-1419",
  {
    props: {
      name: figma.string("name"),
      category: figma.string("category"),
    },
    example: ({ name, category }) => (
      <CardGuide
        src="/path/to/portrait.jpg"
        name={name}
        category={category}
      />
    ),
    imports: ["import CardGuide from '@/components/CardGuide'"],
  }
)
