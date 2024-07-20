import React, { FC } from "react";

import { ICustomSelectValue, Select } from "..";

import { StyledDropdown } from "./Dropdown.styled";

export interface IDropdownItem {
  action: () => void;
  title: string;
}

interface IDropdown {
  optionRender?: (option: ICustomSelectValue) => JSX.Element;
  title?: string;
  todo: IDropdownItem[];
}

const Dropdown: FC<IDropdown> = ({ optionRender, title = "Dropdown", todo }) => {
  const options = todo.map((item, index) => ({ label: item.title, value: index.toString() }));

  const handleAction = ({ value }: ICustomSelectValue): void => {
    const index = Number(value);
    if (Number.isInteger(index) && options[index]) todo[index].action();
  };

  return (
    <StyledDropdown>
      <Select
        // defaultMenuIsOpen
        multiple={false}
        placeholder={title}
        options={options}
        // @ts-ignore
        onChange={handleAction}
        isSearchable={false}
        menuPlacement="top"
        optionRender={optionRender}
      />
    </StyledDropdown>
  );
};

export default Dropdown;
