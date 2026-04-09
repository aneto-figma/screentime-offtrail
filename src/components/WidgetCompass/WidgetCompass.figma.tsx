import figma from "@figma/code-connect"
import WidgetCompass from "@/components/WidgetCompass/WidgetCompass"

figma.connect(
  "https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=795-2037",
  {
    example: () => <WidgetCompass live />,
    imports: ["import WidgetCompass from '@/components/WidgetCompass/WidgetCompass'"],
  }
)
