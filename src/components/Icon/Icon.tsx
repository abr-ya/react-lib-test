import React, { FC } from "react";

import { WrapperStyled } from "./Icon.style";

interface IIcon {
  className?: string;
  color?: string;
  fullWidth?: boolean;
  icon: Element | FC | string; // svg || html
  onClick?: () => void;
}

/*** Компонент для вывода svg-иконок == аналог SBOL ***/
const Icon: FC<IIcon> = ({ icon, className = "", color, fullWidth, onClick = () => false }) => {
  if (!icon) return null;

  return (
    <WrapperStyled
      color={color}
      fullWidth={fullWidth}
      className={className}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
};

export default Icon;
