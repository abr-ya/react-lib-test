import React from "react";

export interface ITypographyProps {
  className?: string;
  as?: React.ElementType;
}

export type IFontWeightRegular = "regular";
export type IFontWeightSemibold = "semibold";
export type IFontWeightMedium = "medium";

export interface IBody1Props extends ITypographyProps {
  weight?: IFontWeightRegular | IFontWeightSemibold;
}

export type IBody2Props = IBody1Props;

export interface IBody3Props extends ITypographyProps {
  weight?: IFontWeightRegular | IFontWeightSemibold | IFontWeightMedium;
}

export interface ICaption1Props extends ITypographyProps {
  weight?: IFontWeightRegular | IFontWeightSemibold;
}
