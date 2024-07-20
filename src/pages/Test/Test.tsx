import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { dictHasData, getCategoriesDict, getStatusesDict } from "src/app/dictionaries";

const Test = () => {
  const dispatch = useAppDispatch();

  const { acts } = useAppSelector((state) => state.dictionaries);

  useEffect(() => {
    if (!dictHasData(acts.category)) dispatch(getCategoriesDict());
    if (!dictHasData(acts.status)) dispatch(getStatusesDict());
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <h3>На этой странице пока что запрашиваются два Справочника, необходимые для поиска Актов</h3>
    </div>
  );
};

export default Test;
