import React, { FC } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { Button, Headline4 } from "@cars/design-system";

import { CustomTooltip, DatesPair, Input, SmartSelect } from "components/index";
import CloseButtonSvg from "components/hookForm/CloseButtonSvg";
import { actNumberValidator } from "components/hookForm/commonValidators";
import { IDictionaryItem } from "entities/dictionaries/models";

import { DateFieldsType, DateType, IFormData, SelectFieldsType, TextFieldsType, ValueType } from "../interfaces";
import {
  CLOSE_MODAL_TIMEOUT_MS,
  EMPTYFORM,
  LABELS,
  MAXDAYS,
  MODAL_BOTTOM_RESERVE,
  MODAL_TOP_OFFSET,
  PLACEHOLDERS,
  TEST_MODE,
  TOOLTIPS,
} from "../constants";

import { getCustomStyles } from "./utils/helpers";
import {
  CloseButton,
  FormHeading,
  TwoColumns,
  FormControls,
  ModalFormWrapper,
  ContentWrapper,
  TTWrapper,
} from "./ModalForm.styled";

Modal.setAppElement("#app");

interface IModalForm {
  buttonCoordinates: { right: number; top: number };
  dictCategory: Array<IDictionaryItem>;
  dictStatus: Array<IDictionaryItem>;
  formInit: Partial<IFormData>;
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (data: IFormData) => void;
}

const ModalForm: FC<IModalForm> = ({
  buttonCoordinates,
  dictCategory,
  dictStatus,
  formInit,
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  const { control, handleSubmit, reset, setValue, trigger } = useForm<IFormData>({
    defaultValues: formInit,
    mode: "onChange",
  });

  const submitHandler: SubmitHandler<IFormData> = (data) => {
    if (TEST_MODE) console.log("submitHandler data", data);
    onSubmit(data);
  };

  const errorHandler: SubmitErrorHandler<IFormData> = (errors) => {
    if (TEST_MODE) console.log("errorHandler errors", errors);
  };

  const onReset = (): void => {
    reset(EMPTYFORM);
  };

  /* Подготовка стилей для модального окна */
  const customStyles = getCustomStyles(buttonCoordinates, MODAL_TOP_OFFSET, isOpen);

  const handleRequestClose = (): void => {
    onRequestClose();

    /* Добавляем задержку, чтобы не видеть установку новых значений, пока окно плавно закрывается */
    setTimeout(() => {
      reset(formInit);
    }, CLOSE_MODAL_TIMEOUT_MS);
  };

  const setCustomValue = (key: keyof IFormData, value: ValueType) => {
    if (TEST_MODE) console.log("setCustomValue", key, value);
    // @ts-ignore
    setValue(key, value, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    void trigger();
  };

  return (
    <ModalFormWrapper>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleRequestClose}
        style={customStyles}
        closeTimeoutMS={CLOSE_MODAL_TIMEOUT_MS}
      >
        <ContentWrapper
          maxHeightPx={window.innerHeight - buttonCoordinates.top - MODAL_TOP_OFFSET - MODAL_BOTTOM_RESERVE}
        >
          <FormHeading>
            <Headline4>{"Изменить критерии"}</Headline4>
            <CloseButton onClick={handleRequestClose}>
              <CloseButtonSvg />
            </CloseButton>
          </FormHeading>

          <form onSubmit={handleSubmit(submitHandler, errorHandler)}>
            <TwoColumns>
              <div>
                <CustomTooltip id="tooltip1" offset={-10} />
                <TTWrapper data-tooltip-id="tooltip1" data-tooltip-content={TOOLTIPS.INPUT1}>
                  <Input<IFormData, TextFieldsType>
                    name="input1"
                    control={control}
                    label={LABELS.INPUT1}
                    placeholder={PLACEHOLDERS.INPUT1}
                    validate={(value) => actNumberValidator(value)}
                  />
                </TTWrapper>
                <Input<IFormData, TextFieldsType>
                  name="input2"
                  control={control}
                  label={LABELS.INPUT2}
                  placeholder={PLACEHOLDERS.INPUT2}
                />
                <SmartSelect<IFormData, SelectFieldsType>
                  name="status"
                  control={control}
                  options={dictStatus}
                  label={LABELS.STATUS}
                  placeholder={PLACEHOLDERS.STATUS}
                  isMulti
                  maxMenuHeight={180}
                />
                <SmartSelect<IFormData, SelectFieldsType>
                  name="category"
                  control={control}
                  options={dictCategory}
                  label={LABELS.CATEGORY}
                  placeholder={PLACEHOLDERS.CATEGORY}
                  isMulti
                  maxMenuHeight={100}
                />
              </div>
              <div>
                <DatesPair<IFormData, DateFieldsType>
                  control={control}
                  label={LABELS.DATE1}
                  name1={DateType.FromDate1}
                  name2={DateType.ToDate1}
                  placeholder={PLACEHOLDERS.DATE}
                  maxDays={MAXDAYS}
                  setter={setCustomValue}
                />
                <DatesPair<IFormData, DateFieldsType>
                  control={control}
                  label={LABELS.DATE2}
                  name1={DateType.FromDate2}
                  name2={DateType.ToDate2}
                  placeholder={PLACEHOLDERS.DATE}
                  maxDays={MAXDAYS}
                  setter={setCustomValue}
                />
                <DatesPair<IFormData, DateFieldsType>
                  control={control}
                  label={LABELS.DATE3}
                  name1={DateType.FromDate3}
                  name2={DateType.ToDate3}
                  placeholder={PLACEHOLDERS.DATE}
                  maxDays={MAXDAYS}
                  setter={setCustomValue}
                />
              </div>
            </TwoColumns>

            <FormControls>
              <Button type="reset" onClick={onReset} size="sm" variant="secondary">
                Сбросить все фильтры
              </Button>
              <Button type="submit" size="sm" variant="primary">
                Найти
              </Button>
            </FormControls>
          </form>
        </ContentWrapper>
      </Modal>
    </ModalFormWrapper>
  );
};

export default ModalForm;
