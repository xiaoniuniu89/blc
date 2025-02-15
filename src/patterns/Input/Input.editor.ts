import { registerComponent } from "@plasmicapp/react-web/lib/host";
import { Input } from "./Input";

export const registerInputComponent = () =>
  registerComponent(Input, {
    name: "Input",
    importPath: "./src/patterns/Input/Input",
    props: {
      type: {
        type: "choice",
        options: ["text", "checkbox", "password", "radio"],
      },
      value: "string",
      placeholder: "string",
      className: "string",
    },
  });
