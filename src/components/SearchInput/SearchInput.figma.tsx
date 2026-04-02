import figma from "@figma/code-connect"
import SearchInput from "./SearchInput"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=799-4917",
  {
    props: {
      state: figma.enum("State", {
        Placeholder: "Placeholder",
        Active: "Active",
      }),
      text: figma.string("Text"),
    },
    example: ({ state, text }) => (
      <SearchInput state={state} text={text} />
    ),
    imports: ["import SearchInput from '@/components/SearchInput/SearchInput'"],
  }
)
