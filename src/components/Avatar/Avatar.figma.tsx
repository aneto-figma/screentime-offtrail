import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-9939",
  {
    props: {
      size: figma.enum("Size", {
        "80": 80,
        "56": 56,
        "40": 40,
        "32": 32,
      }),
    },
    example: ({ size }) => (
      <Avatar src="/path/to/avatar.jpg" size={size} />
    ),
    imports: ["import Avatar from '@/components/Avatar'"],
  }
)
