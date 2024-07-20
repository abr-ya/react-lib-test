import React, { FC, useRef } from "react";

import { IButtonCoordinates, ITagItem } from "../interfaces";
import ChangeButton from "../ChangeButton";

import { FilterBarWrapper } from "./FilterBar.styled";
import TagsCloud from "./TagsCloud/TagsCloud";

interface IFilterBar {
  onFilterButtonClick: (coordinates: IButtonCoordinates) => void;
  tagsData: ITagItem[];
}

const FilterBar: FC<IFilterBar> = ({ onFilterButtonClick, tagsData }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleFiltersButtonClick = (): void => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const coordinates = {
        right: document.documentElement.clientWidth - rect.right,
        top: rect.top + window.scrollY,
      };
      onFilterButtonClick(coordinates);
    }
  };

  return (
    <FilterBarWrapper>
      <TagsCloud tagsData={tagsData} />
      <ChangeButton buttonRef={buttonRef} onClick={handleFiltersButtonClick} />
    </FilterBarWrapper>
  );
};

export default FilterBar;
