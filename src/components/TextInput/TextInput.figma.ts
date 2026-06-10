// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10222

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const defaultValue = figma.selectedInstance.getString("Value")
const placeholder = figma.selectedInstance.getString("Value")
const showLabel = figma.selectedInstance.getBoolean("Show Label")
const description = figma.selectedInstance.getString("Description")
const showDescription = figma.selectedInstance.getBoolean("Show Description")

export default {
  id: "TextInput",
  imports: ["import TextInput from '@/components/TextInput/TextInput'"],
  example: figma.code`<TextInput${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp(
    "defaultValue",
    defaultValue,
  )}${figma.helpers.react.renderProp(
    "placeholder",
    placeholder,
  )}${figma.helpers.react.renderProp(
    "showLabel",
    showLabel,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp("showDescription", showDescription)}/>`,
  metadata: { nestable: true },
}
