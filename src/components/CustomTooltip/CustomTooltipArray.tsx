import React, { FC } from "react";

import { CustomTooltip, Flex } from "components/index";

import { MoreLabel } from "./Tooltip.styles";

interface ICustomTooltipArray {
  data: string[];
  visible?: number;
}

const CustomTooltipArray: FC<ICustomTooltipArray> = ({ data, visible = 2 }) => {
  return (
    <Flex width="content">
      <Flex>{data.slice(0, visible).join(", ")}</Flex>
      {data.length > visible && (
        <MoreLabel
          data-tooltip-id="tooltip-more"
          data-tooltip-content={data.slice(visible).join(", ")}
          data-tooltip-variant="dark"
        >
          ещё {data.length - visible}
        </MoreLabel>
      )}
      <CustomTooltip id="tooltip-more" variant="none" place="right" offset={10} width={200} />
    </Flex>
  );
};

export default CustomTooltipArray;
