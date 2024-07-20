import { FC, useState, JSX } from "react";

import { arrow } from "components/icons";

import { IconSvg } from "..";

import { Header, Panel, StyledAccordion } from "./Accordion.styles";

interface IAccordionItem {
  body: string | JSX.Element;
  title: string;
  title2?: string;
}

interface IAccordion {
  data: IAccordionItem[];
  hasIcon?: boolean;
  width?: string;
}

const Accordion: FC<IAccordion> = ({ data, hasIcon = true, width = "100%" }) => {
  const [state, setState] = useState(data.map(() => false));

  const toggle = (i: number) => {
    setState((prev) => {
      const newArray = [...prev];
      newArray[i] = !prev[i];

      return newArray;
    });
  };

  return (
    <StyledAccordion width={width}>
      {data.map((el, i) => (
        <div key={el.title}>
          <Header isActive={state[i]} onClick={() => toggle(i)}>
            <div>{hasIcon && <IconSvg icon={arrow} color={"none"} fullWidth />}</div>
            <div>{el.title}</div>
            <div>{el.title2 ? el.title2 : null}</div>
          </Header>
          <Panel isActive={state[i]}>{el.body}</Panel>
        </div>
      ))}
    </StyledAccordion>
  );
};

export default Accordion;
