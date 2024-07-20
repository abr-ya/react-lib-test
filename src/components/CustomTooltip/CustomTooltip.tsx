import React, { CSSProperties, FC } from "react";
import { PlacesType, Tooltip } from "react-tooltip";

interface ICustomTooltip {
  bgColor?: string;
  color?: string;
  id: string;
  offset?: number;
  place?: PlacesType;
  variant?: "none" | "default";
  width?: number | "content";
}

const CustomTooltip: FC<ICustomTooltip> = ({
  bgColor = "#fff",
  color = "#222",
  id,
  offset = 0,
  place = "top",
  variant,
  width = "content",
}) => {
  const commonStyle = {
    borderRadius: "8px",
    fontFamily: "SBSans, Arial, Helvetica, sans-serif",
    lineHeight: "18px",
    maxHeight: "33vh",
    overflowY: "auto" as const, // to fix TS error!
    width,
    wordBreak: "break-word" as const,
    zIndex: 1000,
  };
  const style: Partial<CSSProperties> =
    variant === "none"
      ? commonStyle
      : {
          ...commonStyle,
          /* stylelint-disable-next-line value-keyword-case */
          backgroundColor: bgColor,
          boxShadow: "#26262614 0 1px 2px, #26262630 0 12px 24px",
          color,
          fontSize: "13px",
          overflowY: "unset" as const,
        };

  // "Do not set `style.opacity`. Use `opacity` prop instead." etc
  const styleProps = variant === "none" ? {} : { border: "1px solid #26262614", opacity: "100%" };

  return <Tooltip id={id} style={style} clickable place={place} offset={offset} {...styleProps} />;
};

export default CustomTooltip;
