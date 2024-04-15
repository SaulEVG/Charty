import React, { useState } from "react";
import { fecthDataAPISearch } from "../services/api";
import "../styles/SearchBar.css";

const SearchBar: React.FC = () => {
  const [option, setOptions] = useState<ArrayAPIDataSearch>([]);

  const handlerSearch = async () => {
    const userInput: string | undefined = (
      document.querySelector("input") as HTMLInputElement
    )?.value;
    const dataSearched: ArrayAPIDataSearch | undefined =
      await fecthDataAPISearch(userInput);
    if (dataSearched) {
      setOptions(dataSearched);
    } else {
      setOptions([]);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        name="symbol"
        onKeyUp={handlerSearch}
        placeholder="VALE3"
      />
      <div className="search-bar-list-container">
        <ul className="search-bar-list">
          {option.map((option, index) => (
            <li
              className="search-bar-item"
              key={index}
            >{`${option.symbol} - ${option.name}`}</li>
          ))}
        </ul>
      </div>
      <input type="button" value="Search" />
    </div>
  );
};

export default SearchBar;
