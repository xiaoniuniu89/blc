import * as React from "react";
import {
  PlasmicCardPage,
  DefaultCardPageProps,
} from "../../generated/bcl/PlasmicCardPage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface CardPageProps extends DefaultCardPageProps {}

function CardPage_(props: CardPageProps, ref: HTMLElementRefOf<"div">) {
  const overrides: Parameters<typeof PlasmicCardPage>[0]["overrides"] = {
    card1: {
      onClick: () => alert("Card 1 clicked"),
    },
    card2: {
      onClick: () => alert("Card 2 clicked"),
    },
  };

  return <PlasmicCardPage root={{ ref }} {...props} overrides={overrides} />;
}

const CardPage = React.forwardRef(CardPage_);
export default CardPage;
