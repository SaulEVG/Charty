import React, { useState } from "react";
import {
  fecthDataAPIHistoricalPrice,
  fecthDataAPISearch,
} from "../services/api";
import "../styles/SearchBar.css";
import { useUpdateHistoricalPrice } from "../context/HistoricalPriceContext";

let timeoutId: number;

const SearchBar: React.FC = () => {
  const [option, setOptions] = useState<ArrayAPIDataSearch>([]);
  const [dataAPISearched, setDataAPISearched] = useState<string>("");
  const [userInput, setUserImput] = useState("");
  const setHistoricalPrice = useUpdateHistoricalPrice();

  const handlerKeyUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userImput = e.currentTarget.value.trim();
    setUserImput(userImput);

    clearTimeout(timeoutId);

    timeoutId = setTimeout(async () => {
      const handlerSearch = async (userImput: string) => {
        const dataSearched: ArrayAPIDataSearch | undefined =
          await fecthDataAPISearch(userImput);

        if (dataSearched && dataSearched.length > 0) {
          const dataSearchedFirstSymbol = dataSearched[0].symbol;
          setDataAPISearched(dataSearchedFirstSymbol);
          setOptions(dataSearched);

          const historicalPriceSymbol = await fecthDataAPIHistoricalPrice(
            "1hour",
            dataAPISearched
          );
          if (historicalPriceSymbol) {
            setHistoricalPrice(historicalPriceSymbol);
            console.log(dataAPISearched, userImput);
          }
        } else {
          setOptions([]);
        }
      };
      handlerSearch(userInput);
    }, 2000);
  };

  return (
    <div className="search-bar-container">
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
      <input
        className="search-bar-input"
        type="search"
        name="symbol"
        onInput={handlerKeyUp}
        placeholder="VALE3"
      />
      <input type="button" value="Search" />
    </div>
  );
};

export default SearchBar;
