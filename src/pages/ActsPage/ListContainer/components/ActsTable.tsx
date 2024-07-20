import { FC } from "react";
import { Table } from "@cars/design-system";

import { Flex, Loader, NotFound, StatusTag, StyledLink } from "components/index";
import { IDestructionActTableItem } from "pages/ActsPage/data";
// @ts-expect-error todo: проверить: чего ему тут не хватает?
import { ROUTES } from "constants/routes";
import { strCut } from "lib/helpers/common";
import { TStatus } from "api/contracts";

import { TABLE_H as height, TABLE_HEADERS } from "../constants";

interface IActsTable {
  data: IDestructionActTableItem[];
  isLoading: boolean;
}

const ActsTable: FC<IActsTable> = ({ data, isLoading }) => {
  // eslint-disable-next-line prettier/prettier
  if (isLoading) return <Flex justifyContent='center' height={height}><Loader /></Flex>;
  if (!data?.length) return <NotFound />;

  const linkRender = (guid: string, number: string) => (
    <StyledLink color="#10bf6a" to={`${ROUTES.ACTS}${encodeURIComponent(guid)}`}>
      {number}
    </StyledLink>
  );

  const statusRender = (status: TStatus) => (
    <Flex>
      <StatusTag status={status} />
    </Flex>
  );

  return (
    <div style={{ height, maxWidth: "100%", overflow: "auto" }}>
      <Table
        cellsProps={[{}, { collapsible: true, maxTextLines: 3 }]}
        headers={TABLE_HEADERS}
        rows={data?.map(
          ({
            guid,
            number,
            registrationNumber,
            status,
            title,
            documentCategory,
            date1create,
            date2approve,
            date3close,
          }) => [
            linkRender(guid, number),
            strCut(registrationNumber || "", 30),
            status?.code ? statusRender(status?.code as TStatus) : "",
            strCut(title || "", 50),
            documentCategory?.name,
            date1create,
            date2approve,
            date3close,
          ],
        )}
      />
    </div>
  );
};

export default ActsTable;
