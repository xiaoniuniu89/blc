// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qjHebJopU8JyneJPfvm2YG
// Component: PJh-iYRY8EJt

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Card } from "../../patterns/Card/Card"; // plasmic-import: ql2LYIq--9pW/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: qjHebJopU8JyneJPfvm2YG/projectcss
import sty from "./PlasmicCardPage.module.css"; // plasmic-import: PJh-iYRY8EJt/css

createPlasmicElementProxy;

export type PlasmicCardPage__VariantMembers = {};
export type PlasmicCardPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicCardPage__VariantsArgs;
export const PlasmicCardPage__VariantProps = new Array<VariantPropType>();

export type PlasmicCardPage__ArgsType = {};
type ArgPropType = keyof PlasmicCardPage__ArgsType;
export const PlasmicCardPage__ArgProps = new Array<ArgPropType>();

export type PlasmicCardPage__OverridesType = {
  root?: Flex__<"div">;
  card1?: Flex__<typeof Card>;
  card2?: Flex__<typeof Card>;
};

export interface DefaultCardPageProps {
  className?: string;
}

const $$ = {};

function PlasmicCardPage__RenderFunc(props: {
  variants: PlasmicCardPage__VariantsArgs;
  args: PlasmicCardPage__ArgsType;
  overrides: PlasmicCardPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___3CXXb)}
          >
            <Card
              data-plasmic-name={"card1"}
              data-plasmic-override={overrides.card1}
              className={classNames("__wab_instance", sty.card1)}
              title={"Card 1"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__wnxo)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dgBw7
                  )}
                >
                  {"The card text"}
                </div>
              </div>
            </Card>
            <Card
              data-plasmic-name={"card2"}
              data-plasmic-override={overrides.card2}
              className={classNames("__wab_instance", sty.card2)}
              title={"Card 2"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__btkDd)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zfQlU
                  )}
                >
                  {"The card text"}
                </div>
              </div>
            </Card>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "card1", "card2"],
  card1: ["card1"],
  card2: ["card2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  card1: typeof Card;
  card2: typeof Card;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCardPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardPage__VariantsArgs;
    args?: PlasmicCardPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCardPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCardPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCardPage__ArgProps,
          internalVariantPropNames: PlasmicCardPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCardPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardPage";
  } else {
    func.displayName = `PlasmicCardPage.${nodeName}`;
  }
  return func;
}

export const PlasmicCardPage = Object.assign(
  // Top-level PlasmicCardPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    card1: makeNodeComponent("card1"),
    card2: makeNodeComponent("card2"),

    // Metadata about props expected for PlasmicCardPage
    internalVariantProps: PlasmicCardPage__VariantProps,
    internalArgProps: PlasmicCardPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCardPage;
/* prettier-ignore-end */
