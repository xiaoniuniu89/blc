import { registerComponent } from "@plasmicapp/react-web/lib/host";
import { Card } from "./Card";

export const registerCardComponent = () =>
  registerComponent(Card, {
    name: "Card",
    importPath: "./src/patterns/Card/Card",
    props: {
      title: "string",
      children: "slot",
      className: "string",
    },
  });
