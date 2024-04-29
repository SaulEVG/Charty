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
  const [userImput, setUserImput] = useState("");
  const [time, setTime] = useState("1hour");
  const setHistoricalPrice = useUpdateHistoricalPrice();

  const handlerKeyUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imput = e.currentTarget.value.trim();
    setUserImput(imput);

    clearTimeout(timeoutId);

    timeoutId = setTimeout(async () => {
      const dataSearched: ArrayAPIDataSearch | undefined =
        await fecthDataAPISearch(userImput);

      if (dataSearched && dataSearched.length > 0) {
        setOptions(dataSearched);
      } else {
        setOptions([]);
      }
    }, 1000);
  };

  const handlerClick = async (symbol: string) => {
    document.querySelector("input").value = "";

    const dataSearchedFirstSymbol = symbol;
    setDataAPISearched(dataSearchedFirstSymbol);

    const historicalPriceSymbol = await fecthDataAPIHistoricalPrice(
      time,
      symbol
    );

    if (historicalPriceSymbol) {
      setHistoricalPrice(historicalPriceSymbol.reverse());
    }
  };

  const handleSetTime = (chooseTime: string) => {
    setTime(chooseTime);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="search"
        name="symbol"
        onInput={handlerKeyUp}
        autoComplete="off"
        placeholder={dataAPISearched ? dataAPISearched : "AAPL"}
      />
      <svg
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          height: "4.5vh",
          position: "absolute",
          left: "20vw",
          top: "1.3vh",
        }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        ></path>
      </svg>
      <div className="search-bar-list-container">
        {userImput && (
          <ul className="search-bar-list">
            {option.length > 0 ? (
              option.map((option, index) => (
                <li
                  onClick={() => {
                    handlerClick(option.symbol);
                    setUserImput("");
                  }}
                  className="search-bar-item"
                  key={index}
                >{`${option.symbol} - ${option.name}`}</li>
              ))
            ) : (
              <li>Searching...</li>
            )}
          </ul>
        )}
      </div>
      <ul className="list-time-sets">
        <li
          className={`time-item ${time === "1min" ? "active" : ""}`}
          onClick={() => {
            handleSetTime("1min");
          }}
        >
          1m
        </li>
        <li
          className={`time-item ${time === "5min" ? "active" : ""}`}
          onClick={() => {
            handleSetTime("5min");
          }}
        >
          5m
        </li>
        <li
          className={`time-item ${time === "30min" ? "active" : ""}`}
          onClick={() => {
            handleSetTime("30min");
          }}
        >
          30m
        </li>
        <li
          className={`time-item ${time === "1hour" ? "active" : ""}`}
          onClick={() => {
            handleSetTime("1hour");
          }}
        >
          1h
        </li>
        <li
          className={`time-item ${time === "4hour" ? "active" : ""}`}
          onClick={() => {
            handleSetTime("4hour");
          }}
        >
          4h
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;
