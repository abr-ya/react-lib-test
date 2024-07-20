import axios from "axios";
import AsyncSelect from "react-select/async";
import { StateOption, stateOptions } from "./data";

const SelectPage = () => {
  const filterColors = (inputValue: string) => {
    return stateOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<StateOption[]>((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  const getCountries = (inputValue: string) => {
    return axios.get(`https://restcountries.com/v3.1/name/${inputValue}`).then((res) => {
      console.log(res);
      const options = res.data.map((el: any) => ({ label: el.translations.rus.common, value: el.name.common }));
      console.log(options);
      return options;
    });
  };

  return (
    <div className="container">
      <h2>AsyncSelect demo</h2>
      <h3>States (timeout)</h3>
      <AsyncSelect isMulti cacheOptions defaultOptions loadOptions={promiseOptions} />

      <h3>Countries (axios)</h3>
      <AsyncSelect
        isMulti
        cacheOptions
        loadOptions={getCountries}
        placeholder="Start typing"
        noOptionsMessage={({ inputValue }) => (inputValue ? "No opt 1" : "No opt 0")}
      />
    </div>
  );
};

export default SelectPage;
