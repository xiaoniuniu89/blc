import { registerComponent } from "@plasmicapp/react-web/lib/host";
import { Button } from "./Button";

export const registerButtonComponent = () =>
  registerComponent(Button, {
    name: "Button",
    importPath: "./src/patterns/Button/Button",
    props: {
      label: "string",
      variant: {
        type: "choice",
        options: ["primary", "secondary"],
      },
      disabled: "boolean",
      className: "string",
    },
  });
