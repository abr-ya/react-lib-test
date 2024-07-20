import { Pagination } from "@cars/design-system";
import React, { FC, useEffect, useState } from "react";

import { PaginationWrapper } from "./Pagination.styles";

// компонет для подключения новой пагинации из ДС вместо самописного компонента
// сохраняет пропсы для бесшовной замены
export interface IPaginationAdapter {
  activePage: number;
  onClick(page: number): void;
  pageCount: number;
}

// для совместимости +-1, т.к. до сих пор работали с "человеческими" номерами
// на старте в Слайсе надо ставить 1, а не 0!
// или переходить на хранение "с 0"!
const PaginationAdapter: FC<IPaginationAdapter> = ({ activePage, onClick, pageCount }) => {
  const [page, setPage] = useState(activePage - 1); // для совместимости
  const gotoHandler = (newPage: number) => {
    onClick(newPage + 1); // для совместимости
    setPage(newPage);
  };

  useEffect(() => {
    setPage(activePage - 1);
  }, [activePage]);

  const nextHandler = () => {
    const newPage = page + 1;
    onClick(newPage + 1); // для совместимости
    setPage(newPage);
  };

  const prevHandler = () => {
    const newPage = page - 1;
    onClick(newPage + 1); // для совместимости
    setPage(newPage);
  };

  return (
    <PaginationWrapper>
      <Pagination
        boundaries={2} // в начале и в конце
        canNextPage={page < pageCount - 1}
        canPreviousPage={page > 0}
        gotoPage={gotoHandler}
        nextPage={nextHandler}
        pageCount={pageCount}
        pageIndex={page}
        pageSize={20}
        previousPage={prevHandler}
        setPageSize={() => false}
        siblings={1}
      />
    </PaginationWrapper>
  );
};

export default PaginationAdapter;
