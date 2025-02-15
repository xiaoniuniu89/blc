import * as React from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps,
} from "../../generated/bcl/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useNavigate } from "react-router";

export interface HomepageProps extends DefaultHomepageProps {}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const navigate = useNavigate();

  const overrides: Parameters<typeof PlasmicHomepage>[0]["overrides"] = {
    buttonCard: {
      onClick: () => navigate("/button-page"),
    },
    inputCard: {
      onClick: () => navigate("/input-page"),
    },
    cardCard: {
      onClick: () => navigate("/card-page"),
    },
  };

  return <PlasmicHomepage root={{ ref }} {...props} overrides={overrides} />;
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
