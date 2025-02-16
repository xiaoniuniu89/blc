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
        options: ["primary", "secondary", "tertiary"],
      },
      disabled: "boolean",
      className: "string",
    },
  });
