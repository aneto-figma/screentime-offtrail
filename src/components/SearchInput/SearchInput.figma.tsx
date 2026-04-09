import figma from "@figma/code-connect"
import SearchInput from "./SearchInput"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=799-4917",
  {
    props: {
      defaultValue: figma.string("Text"),
      placeholder: figma.string("Text"),
    },
    example: ({ defaultValue, placeholder }) => (
      <SearchInput defaultValue={defaultValue} placeholder={placeholder} />
    ),
    imports: ["import SearchInput from '@/components/SearchInput/SearchInput'"],
  }
)
