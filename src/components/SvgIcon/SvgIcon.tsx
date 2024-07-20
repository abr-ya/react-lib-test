// для совместимости с cars-components
// TODO: проработать все варианты == old
import * as React from "react";

import { StyledSvgIcon } from "./SvgIcon.styles";
import { FC } from "react";

export interface ISvgIconProps {
  /** Color of background */
  backgroundColor?: string;
  /** The content of the component. */
  children?: React.ReactNode;
  /** @ignore */
  className?: string;
  /** Цвет */
  color?: string;
  /** Font Size  */
  fontSize?: number;
  /** Height */
  height?: number;
  onClick?: (event: React.MouseEvent | any) => void;
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this property.
   */
  shapeRendering?: string;
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess?: string;
  /**
   * Icon transformation
   */
  transform?: string;
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox?: string;
  /** Width */
  width?: number;
}

/**
 * @version 1.0.7
 * @since 1.0.7
 * @author [Aleksandr Mironov](https://stash.ca.sbrf.ru/users/mironov7-aa)
 */

export const SvgIcon: FC<ISvgIconProps> = ({
  children,
  color,
  height,
  titleAccess,
  viewBox,
  width,
  ...other
}: ISvgIconProps): JSX.Element => {
  return (
    <StyledSvgIcon
      focusable="false"
      viewBox={viewBox}
      color={color}
      aria-hidden={titleAccess ? "false" : "true"}
      role={titleAccess ? "img" : "presentation"}
      width={width}
      height={height}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </StyledSvgIcon>
  );
};
