import { useState } from "react";
import { YearPicker } from "src/componentsTest/YearPicker";

const Components = () => {
  const [year, setYear] = useState<string | null>(null);

  const yearChangeHandler = (year: string | null) => {
    console.log(year);
    setYear(year);
  };

  return (
    <>
      <div>Components</div>
      <YearPicker value={year} onChange={yearChangeHandler} label="Дата" description="Введите год" />
    </>
  );
};

export default Components;
