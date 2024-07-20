import { strCut } from "src/lib/helpers/common";
import { CustomTooltip } from "..";

import { Line, Left, Right } from "./StyledCardLine";

interface ICardLine {
  children?: JSX.Element;
  cut?: number;
  text?: string;
  title: string;
  width?: { left: number; right: number };
}

const CardLine = ({ children, cut, text = "", title, width }: ICardLine) => {
  const renderText = () =>
    cut && text && cut < text.length ? (
      <div data-tooltip-id={`tooltip-line-${cut}`} data-tooltip-content={text}>
        <>{strCut(text, cut)}</>
        <CustomTooltip id={`tooltip-line-${cut}`} />
      </div>
    ) : (
      <>{text}</>
    );

  return (
    <Line>
      <Left width={width?.left}>{title}</Left>
      <Right width={width?.right}>{children ? <>{children}</> : renderText()}</Right>
    </Line>
  );
};

export default CardLine;
