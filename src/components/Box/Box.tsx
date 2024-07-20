import { FC } from "react";

import { StyledBox } from "./Box.styles";

type StyledType = string | number | string[] | number[];
export interface IBoxProps {
  color?: string;
  borderBottom?: StyledType;
  borderColor?: string;
  bg?: StyledType;
  m?: StyledType;
  mt?: StyledType;
  mr?: StyledType;
  mb?: StyledType;
  ml?: StyledType;
  mx?: StyledType;
  my?: StyledType;
  p?: StyledType;
  pt?: StyledType;
  pr?: StyledType;
  pb?: StyledType;
  pl?: StyledType;
  px?: StyledType;
  py?: StyledType;
  fontSize?: StyledType;
  fontFamily?: StyledType;
  fontWeight?: StyledType;
  gap?: StyledType;
  lineHeight?: StyledType;
  letterSpacing?: StyledType;
  position?: string;
  textAlign?: StyledType;
  fontStyle?: StyledType;
  width?: StyledType;
  minWidth?: StyledType;
  maxWidth?: StyledType;
  height?: StyledType;
  minHeight?: StyledType;
  maxHeight?: StyledType;
  display?: StyledType;
  size?: StyledType;
  verticalAlign?: StyledType;
  overflow?: StyledType;
  alignItems?: StyledType;
  alignContent?: StyledType;
  justifyItems?: StyledType;
  justifyContent?: StyledType;
  flexWrap?: StyledType;
  flexDirection?: StyledType;
  flex?: StyledType;
  flexGrow?: StyledType;
  flexShrink?: StyledType;
  flexBasis?: StyledType;
  justifySelf?: StyledType;
  alignSelf?: StyledType;
  order?: StyledType;
  children?: React.ReactNode | string;
  border?: StyledType;
  borderRadius?: StyledType;
  boxShadow?: StyledType;
  cursor?: StyledType;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  id?: string;
  opacity?: StyledType;
  float?: StyledType;
}

export const Box: FC<IBoxProps> = (props): JSX.Element => {
  return <StyledBox {...props} />;
};
