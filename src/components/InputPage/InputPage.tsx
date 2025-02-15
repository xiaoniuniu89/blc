import * as React from "react";
import {
  PlasmicInputPage,
  DefaultInputPageProps,
} from "../../generated/bcl/PlasmicInputPage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface InputPageProps extends DefaultInputPageProps {}

function InputPage_(props: InputPageProps, ref: HTMLElementRefOf<"div">) {
  const overrides: Parameters<typeof PlasmicInputPage>[0]["overrides"] = {};

  return <PlasmicInputPage root={{ ref }} {...props} overrides={overrides} />;
}

const InputPage = React.forwardRef(InputPage_);
export default InputPage;
