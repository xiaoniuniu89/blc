import * as React from "react";
import {
  PlasmicComponentCard,
  DefaultComponentCardProps,
} from "../../generated/bcl/PlasmicComponentCard";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface ComponentCardProps extends DefaultComponentCardProps {}

function ComponentCard_(
  props: ComponentCardProps,
  ref: HTMLElementRefOf<"div">,
) {
  const overrides: Parameters<typeof PlasmicComponentCard>[0]["overrides"] = {};

  return (
    <PlasmicComponentCard root={{ ref }} {...props} overrides={overrides} />
  );
}

const ComponentCard = React.forwardRef(ComponentCard_);
export default ComponentCard;
