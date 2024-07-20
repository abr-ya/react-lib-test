import { Count, Flex } from "components/index";

import ActsTable from "./components/ActsTable";
import { useAppSelector } from "src/app/store";

const ListContainer = () => {
  const {
    data: { content, totalElements },
    isFetching: listIsFetching,
  } = useAppSelector((state) => state.actsList);

  return (
    <Flex flexDirection="column">
      <Flex mb={3}>
        <Flex alignItems="center" mr={2}>
          Всего актов
        </Flex>
        <Count>{totalElements}</Count>
      </Flex>
      <ActsTable data={content} isLoading={listIsFetching} />
    </Flex>
  );
};

export default ListContainer;
