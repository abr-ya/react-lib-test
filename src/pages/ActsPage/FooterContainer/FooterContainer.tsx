import { FC } from "react";

import { Pagination } from "components/index";
import { useAppDispatch, useAppSelector } from "src/app/store";

import { actSetPage, actSetStart, findActs } from "../data";
import { normalizeSearchParams } from "../SearchContainer/normalize";

const FooterContainer: FC = () => {
  const dispatch = useAppDispatch();

  const {
    data: {
      pageable: { pageNumber },
      totalPages,
    },
    formData,
  } = useAppSelector((state) => state.actsList);

  const getTablePageData = (page: number) => {
    dispatch(actSetPage(page));
    dispatch(actSetStart("prev"));
    dispatch(findActs({ ...normalizeSearchParams(formData), page }));
  };

  return <Pagination pageCount={totalPages} activePage={pageNumber} onClick={getTablePageData} />;
};

export default FooterContainer;
