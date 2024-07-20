import { useEffect, useState } from "react";

import { isFormDataEmpty } from "components/hookForm/helpers";
import { FilterBar, ICustomSelectValue } from "components/index";
import { ITagItem } from "components/hookForm/interfaces";
// import { resetActDetail } from 'pages/ActDetailPage/actDetailSlice';

import { actSetFormData, actSetStart, findActs } from "../data";

import ModalForm from "./ModalForm/ModalForm";
import { IFormData, IButtonCoordinates } from "./interfaces";
import { ERRORS, LABELS } from "./constants";
import { normalizeSearchParams } from "./normalize";
import { dictHasData, getCategoriesDict, getStatusesDict } from "src/app/dictionaries";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { codeName2LabelValue } from "src/lib/helpers/dictHelper";
import { modalOpen } from "src/components/ModalWithProps/utils";

const SearchContainer = () => {
  const dispatch = useAppDispatch();
  const {
    actsList: { formData, page },
    dictionaries: { acts },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (!dictHasData(acts.category)) dispatch(getCategoriesDict());
    if (!dictHasData(acts.status)) dispatch(getStatusesDict());

    dispatch(findActs({ ...normalizeSearchParams(formData), page }));
    // todo: вернуть!
    // dispatch(resetActDetail()); // если пришли искать - чистим детальный, чтобы не показать старые данные или фильтры
  }, []);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [buttonCoordinates, setButtonCoordinates] = useState<IButtonCoordinates>({ top: 0, right: 0 });

  const openModal = (coordinates: IButtonCoordinates): void => {
    setButtonCoordinates(coordinates);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: IFormData): void => {
    if (isFormDataEmpty(data)) {
      modalOpen({ message: ERRORS.EMPTYALLTEXT, title: ERRORS.EMPTYALLHEADER });
    } else {
      if (data.input1 && data.input1.includes("%") && data.input1.length <= 5) {
        modalOpen({ message: ERRORS.TOO_SHORT_NUM, title: ERRORS.EMPTYALLHEADER });
      } else {
        dispatch(actSetFormData(data));
        dispatch(actSetStart("new"));
        dispatch(findActs({ ...normalizeSearchParams(data), page: 1 }));

        closeModal();
      }
    }
  };

  // prepare tags
  const getDataHelper = (data: Array<ICustomSelectValue>, labelPrefix: string): Array<ITagItem> =>
    data.map((item) => ({ condition: !!item, label: `${labelPrefix}: ${item.label}` }));

  const orderedTags: Array<ITagItem> = [
    { condition: !!formData.input1.trim(), label: `${LABELS.INPUT1}: ${formData.input1}` },
    { condition: !!formData.input2.trim(), label: `${LABELS.INPUT2}: ${formData.input2}` },
    ...getDataHelper(formData?.status || [], "Статус"),
    ...getDataHelper(formData?.category || [], "Категория"),
    { condition: !!formData.date1from, label: `${LABELS.DATE1}: ${formData.date1from} — ${formData.date1to}` },
    { condition: !!formData.date2from, label: `${LABELS.DATE2}: ${formData.date2from} — ${formData.date2to}` },
    { condition: !!formData.date3from, label: `${LABELS.DATE3}: ${formData.date3from} — ${formData.date3to}` },
  ];
  // prepare tags

  return (
    <>
      <FilterBar onFilterButtonClick={openModal} tagsData={orderedTags} />
      <ModalForm
        isOpen={isModalOpen}
        formInit={formData}
        onRequestClose={closeModal}
        buttonCoordinates={buttonCoordinates}
        onSubmit={handleFormSubmit}
        dictCategory={codeName2LabelValue(acts.category)}
        dictStatus={codeName2LabelValue(acts.status)}
      />
    </>
  );
};

export default SearchContainer;
