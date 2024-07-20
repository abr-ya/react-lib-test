import React, { type HTMLAttributes, type PropsWithChildren } from "react";
import cx from "classnames";

import { IBody1Props, IBody2Props, IBody3Props, ICaption1Props, ITypographyProps } from "./types";
import {
  cssHSemibold,
  cssSize30,
  cssSize24,
  cssSize20,
  cssSize18,
  cssBody1,
  cssSemibold,
  cssBody2,
  cssBody,
  cssBody3,
  cssMedium,
  cssCaption,
  cssCaption1,
  cssCaption2,
} from "./typography.style";

type HeadingsProps = PropsWithChildren<ITypographyProps & HTMLAttributes<HTMLHeadingElement>>;
type BodyPropsUnion = IBody1Props | IBody2Props | IBody3Props;
type BodyProps<T extends BodyPropsUnion> = PropsWithChildren<T & HTMLAttributes<HTMLParagraphElement>>;

export const H1Size30Semibold = ({ className = "", children, ...props }: HeadingsProps): JSX.Element => (
  <h1 className={cx([cssHSemibold, cssSize30, className])} {...props}>
    {children}
  </h1>
);

export const H2Size24Semibold = ({ className = "", children, ...props }: HeadingsProps): JSX.Element => (
  <h2 className={cx([cssHSemibold, cssSize24, className])} {...props}>
    {children}
  </h2>
);

export const H3Size20Semibold = ({ className = "", children, ...props }: HeadingsProps): JSX.Element => (
  <h3 className={cx([cssHSemibold, cssSize20, className])} {...props}>
    {children}
  </h3>
);

export const H4Size18Semibold = ({ className = "", children, ...props }: HeadingsProps): JSX.Element => (
  <h4 className={cx([cssHSemibold, cssSize18, className])} {...props}>
    {children}
  </h4>
);

export const Body1 = ({
  as: Component = "p",
  className = "",
  weight = "regular",
  children,
  ...props
}: BodyProps<IBody1Props>): JSX.Element => (
  <Component
    className={cx({
      [cssBody]: true,
      [cssBody1]: true,
      [cssSemibold]: weight === "semibold",
      [className]: !!className,
    })}
    {...props}
  >
    {children}
  </Component>
);

export const Body2 = ({
  as: Component = "p",
  className = "",
  weight = "regular",
  children,
  ...props
}: BodyProps<IBody2Props>): JSX.Element => (
  <Component
    className={cx({
      [cssBody]: true,
      [cssBody2]: true,
      [cssSemibold]: weight === "semibold",
      [className]: !!className,
    })}
    {...props}
  >
    {children}
  </Component>
);

export const Body3 = ({
  as: Component = "p",
  className = "",
  weight = "regular",
  children,
  ...props
}: BodyProps<IBody3Props>): JSX.Element => (
  <Component
    className={cx({
      [cssBody]: true,
      [cssBody3]: true,
      [cssSemibold]: weight === "semibold",
      [cssMedium]: weight === "medium",
      [className]: !!className,
    })}
    {...props}
  >
    {children}
  </Component>
);

export const Caption1 = ({
  as: Component = "p",
  className = "",
  weight = "regular",
  children,
}: PropsWithChildren<ICaption1Props & HTMLAttributes<HTMLParagraphElement>>): JSX.Element => (
  <Component
    className={cx({
      [cssCaption]: true,
      [cssCaption1]: true,
      [cssSemibold]: weight === "semibold",
      [className]: !!className,
    })}
  >
    {children}
  </Component>
);

export const Caption2 = ({
  as: Component = "p",
  className = "",
  children,
}: PropsWithChildren<ITypographyProps & HTMLAttributes<HTMLParagraphElement>>): JSX.Element => (
  <Component
    className={cx({
      [cssCaption]: true,
      [cssCaption2]: true,
      [className]: !!className,
    })}
  >
    {children}
  </Component>
);
