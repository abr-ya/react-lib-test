import React, { FC } from "react";
import { Typography } from "@cars/design-system";

import { ProcessStatusColors, ProcessTextColors } from "constants/statusColors";
import { process1, process2, process3 } from "components/icons";
import { IActProcess } from "pages/ActDetailPage/interfaces";

import { Accordion, Box, Flex, IconSvg, ProcessStatusTag } from "..";

import { Progress, StyledCard } from "./ProcessCard.styles";
import FooterItem from "./FooterItem";

interface IProcessCard {
  data: IActProcess;
}

const ProcessCard: FC<IProcessCard> = ({ data: { datetime, docs, status, tasks, type } }) => {
  const title = { 1: "Бумажные документы", 2: "Сканы бумажных документов", 3: "Электронные документы" };
  const icon = { 1: process1, 2: process2, 3: process3 };
  const footerTexts: { name: string; text: string; value: number }[] = [
    { name: "На исполнении", text: "В процессе уничтожения", value: tasks.in_progress },
    {
      name: "Завершены с ошибкой",
      text: "Запросы с ошибкой созданы повторно, дополнительных действий не требуется",
      value: tasks.error,
    },
    { name: "Выполненные", text: "Успешно завершенные запросы", value: tasks.success },
  ];
  const colors = [ProcessStatusColors[status], ProcessTextColors[status]]; // todo: надо ли массив?
  const perProgress = docs ? ((docs.destroyed / docs.total) * 100).toFixed(2) : null;

  const renderFooterDetail = () => (
    <Flex flexDirection="column" gap={"16px"}>
      {footerTexts.map((el, i) => (
        <FooterItem key={`fot-${i}`} comment={el.text} title={el.name} value={el.value} />
      ))}
    </Flex>
  );

  return (
    <StyledCard>
      {/* заголовок */}
      <Flex justifyContent="space-between" width="100%" gap="15px">
        <Flex width={78} height={78} bg={colors[0]} borderRadius="8px" justifyContent="center" alignItems="center">
          <Box width={32} height={32}>
            {/* @ts-ignore == color !== string?! */}
            <IconSvg icon={icon[type]} color={colors[1]} fullWidth />
          </Box>
        </Flex>
        <Flex width={180} flexDirection="column" justifyContent="space-between">
          <Typography align="inherit" variant="body2" as="h3" weight="semibold">
            {title[type]}
          </Typography>
          <ProcessStatusTag status={status} />
        </Flex>
        <Flex width={78} justifyContent="flex-end">
          {perProgress ? <ProcessStatusTag status={"not_applicable"} text={`${perProgress}%`} /> : null}
        </Flex>
      </Flex>
      {/* /заголовок */}
      {/* прогресс */}
      <Flex flexDirection="column" gap="8px">
        <Typography variant="body1" weight="semibold">
          {docs?.destroyed && docs.total ? `${docs.destroyed} / ${docs.total}` : ""}
        </Typography>
        {perProgress ? <Progress status={"not_applicable"} progress={`${perProgress}%`} /> : null}
        <Typography variant="caption1" textColor="#909090">
          Начало: {datetime ? datetime.start : null}
        </Typography>
        <Typography variant="caption1" textColor="#909090">
          Завершение: {datetime ? datetime.stop : null}
        </Typography>
      </Flex>
      {/* /прогресс */}
      {/* подвал */}
      <Accordion
        data={[{ body: renderFooterDetail(), title: "Всего заданий", title2: "999" }]}
        width="calc(100% - 32px)"
      />
      {/* /подвал */}
    </StyledCard>
  );
};

export default ProcessCard;
