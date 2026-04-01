import figma from "@figma/code-connect";
import PageHeader from "./PageHeader";

figma.connect(
  PageHeader,
  "https://figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=435-505",
  {
    example: () => <PageHeader title="Explore Trails" showShareButton={true} />,
  },
);
