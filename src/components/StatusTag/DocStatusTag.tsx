import React from "react";

import { TDocStatus } from "api/contracts";

import { StyledDocStatus } from "./StatusTag.styles";

export type TAPIStatus = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08";

const to01 = ["01", "02", "03", "04", "05", "55"];
const to02 = ["06", "56"];
const to03 = ["07", "09", "10", "11", "13", "15", "17", "22", "24", "25", "30", "36", "37", "46"];
const to04 = ["12", "19", "23", "28", "31", "33", "35", "41", "42", "43", "44", "48"];
const to05 = ["21"];
const to06 = ["26", "27", "29", "32", "34", "49", "50", "51", "54"];
const to07 = ["08", "20", "38", "39", "40", "52", "53", "999"];
const to08 = ["45", "47"];

const getAPIStatus = (docStatus: TDocStatus): TAPIStatus => {
  if (to01.includes(docStatus)) return "01";
  if (to02.includes(docStatus)) return "02";
  if (to03.includes(docStatus)) return "03";
  if (to04.includes(docStatus)) return "04";
  if (to05.includes(docStatus)) return "05";
  if (to06.includes(docStatus)) return "06";
  if (to07.includes(docStatus)) return "07";
  if (to08.includes(docStatus)) return "08";

  return "08"; // вообще не должно так быть)
};

interface IStatusTag {
  code: TDocStatus;
  text: string;
}

const DocStatusTag = ({ code, text }: IStatusTag) => {
  return <StyledDocStatus status={getAPIStatus(code)}>{text}</StyledDocStatus>;
};

export default DocStatusTag;
