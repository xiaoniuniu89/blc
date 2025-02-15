import * as React from "react";
import {
  PlasmicButtonPage,
  DefaultButtonPageProps,
} from "../../generated/bcl/PlasmicButtonPage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface ButtonPageProps extends DefaultButtonPageProps {}

function ButtonPage_(props: ButtonPageProps, ref: HTMLElementRefOf<"div">) {
  const overrides: Parameters<typeof PlasmicButtonPage>[0]["overrides"] = {
    primaryButton: {
      onClick: () => alert("Primary button clicked"),
    },
    secondary: {
      onClick: () => alert("Secondary button clicked"),
    },
  };

  return <PlasmicButtonPage root={{ ref }} {...props} overrides={overrides} />;
}

const ButtonPage = React.forwardRef(ButtonPage_);
export default ButtonPage;
