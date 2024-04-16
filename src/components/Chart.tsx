import React from "react";
import Candle from "./Candle";
import "../styles/Chart.css";
import { useHistoricalPrice } from "../context/HistoricalPriceContext";

const $viewHeightValue = 80;

export const Chart: React.FC = () => {
  const historicalPrice = useHistoricalPrice();
  // const historicalPrice = [
  //   {
  //     date: "2023-09-08 15:55:00",
  //     open: 178,
  //     low: 177.99,
  //     high: 178.34,
  //     close: 178.19,
  //     volume: 2640606,
  //   },
  //   {
  //     date: "2023-09-08 15:50:00",
  //     open: 177.93,
  //     low: 177.79,
  //     high: 178,
  //     close: 177.995,
  //     volume: 1188267,
  //   },
  //   {
  //     date: "2023-09-08 15:45:00",
  //     open: 178.01,
  //     low: 177.9,
  //     high: 178.14,
  //     close: 177.925,
  //     volume: 757194,
  //   },
  //   {
  //     date: "2023-09-08 15:40:00",
  //     open: 178.105,
  //     low: 177.91,
  //     high: 178.12,
  //     close: 178,
  //     volume: 578531,
  //   },
  //   {
  //     date: "2023-09-08 15:35:00",
  //     open: 178.13,
  //     low: 177.95,
  //     high: 178.178,
  //     close: 178.11,
  //     volume: 523998,
  //   },
  //   {
  //     date: "2023-09-08 15:30:00",
  //     open: 177.94,
  //     low: 177.84,
  //     high: 178.175,
  //     close: 178.13,
  //     volume: 534214,
  //   },
  //   {
  //     date: "2023-09-08 15:25:00",
  //     open: 178.0409,
  //     low: 177.855,
  //     high: 178.13,
  //     close: 177.945,
  //     volume: 445069,
  //   },
  //   {
  //     date: "2023-09-08 15:20:00",
  //     open: 178.0074,
  //     low: 177.81,
  //     high: 178.2185,
  //     close: 178.04,
  //     volume: 618178,
  //   },
  //   {
  //     date: "2023-09-08 15:15:00",
  //     open: 178.27,
  //     low: 177.89,
  //     high: 178.325,
  //     close: 178,
  //     volume: 744619,
  //   },
  //   {
  //     date: "2023-09-08 15:10:00",
  //     open: 178.35,
  //     low: 178.21,
  //     high: 178.41,
  //     close: 178.2721,
  //     volume: 509946,
  //   },
  //   {
  //     date: "2023-09-08 15:05:00",
  //     open: 178.24,
  //     low: 178.215,
  //     high: 178.39,
  //     close: 178.34,
  //     volume: 605998,
  //   },
  //   {
  //     date: "2023-09-08 15:00:00",
  //     open: 178.2,
  //     low: 177.86,
  //     high: 178.29,
  //     close: 178.2499,
  //     volume: 951134,
  //   },
  //   {
  //     date: "2023-09-08 14:55:00",
  //     open: 178.0401,
  //     low: 178.02,
  //     high: 178.2998,
  //     close: 178.205,
  //     volume: 616673,
  //   },
  //   {
  //     date: "2023-09-08 14:50:00",
  //     open: 178.485,
  //     low: 178.02,
  //     high: 178.51,
  //     close: 178.0401,
  //     volume: 841008,
  //   },
  //   {
  //     date: "2023-09-08 14:45:00",
  //     open: 178.69,
  //     low: 178.43,
  //     high: 178.74,
  //     close: 178.485,
  //     volume: 386939,
  //   },
  //   {
  //     date: "2023-09-08 14:40:00",
  //     open: 178.385,
  //     low: 178.33,
  //     high: 178.755,
  //     close: 178.69,
  //     volume: 710823,
  //   },
  //   {
  //     date: "2023-09-08 14:35:00",
  //     open: 178.775,
  //     low: 178.35,
  //     high: 179.055,
  //     close: 178.389,
  //     volume: 782144,
  //   },
  //   {
  //     date: "2023-09-08 14:30:00",
  //     open: 178.885,
  //     low: 178.63,
  //     high: 178.895,
  //     close: 178.775,
  //     volume: 693349,
  //   },
  //   {
  //     date: "2023-09-08 14:25:00",
  //     open: 179.0788,
  //     low: 178.83,
  //     high: 179.09,
  //     close: 178.8802,
  //     volume: 573713,
  //   },
  //   {
  //     date: "2023-09-08 14:20:00",
  //     open: 178.98,
  //     low: 178.905,
  //     high: 179.1736,
  //     close: 179.075,
  //     volume: 496904,
  //   },
  //   {
  //     date: "2023-09-08 14:15:00",
  //     open: 178.88,
  //     low: 178.7401,
  //     high: 179.03,
  //     close: 178.985,
  //     volume: 773132,
  //   },
  //   {
  //     date: "2023-09-08 14:10:00",
  //     open: 179.59,
  //     low: 178.81,
  //     high: 179.5995,
  //     close: 178.89,
  //     volume: 1017185,
  //   },
  //   {
  //     date: "2023-09-08 14:05:00",
  //     open: 179.8387,
  //     low: 179.57,
  //     high: 179.87,
  //     close: 179.6,
  //     volume: 405032,
  //   },
  //   {
  //     date: "2023-09-08 14:00:00",
  //     open: 179.7037,
  //     low: 179.67,
  //     high: 179.89,
  //     close: 179.83,
  //     volume: 577138,
  //   },
  //   {
  //     date: "2023-09-08 13:55:00",
  //     open: 179.5741,
  //     low: 179.55,
  //     high: 179.8,
  //     close: 179.7,
  //     volume: 416242,
  //   },
  //   {
  //     date: "2023-09-08 13:50:00",
  //     open: 179.71,
  //     low: 179.555,
  //     high: 179.715,
  //     close: 179.5794,
  //     volume: 317380,
  //   },
  //   {
  //     date: "2023-09-08 13:45:00",
  //     open: 179.7501,
  //     low: 179.67,
  //     high: 179.7955,
  //     close: 179.71,
  //     volume: 282242,
  //   },
  //   {
  //     date: "2023-09-08 13:40:00",
  //     open: 179.8281,
  //     low: 179.735,
  //     high: 179.91,
  //     close: 179.75,
  //     volume: 346915,
  //   },
  //   {
  //     date: "2023-09-08 13:35:00",
  //     open: 179.77,
  //     low: 179.65,
  //     high: 179.8699,
  //     close: 179.82,
  //     volume: 314486,
  //   },
  //   {
  //     date: "2023-09-08 13:30:00",
  //     open: 179.59,
  //     low: 179.5701,
  //     high: 179.8199,
  //     close: 179.77,
  //     volume: 407801,
  //   },
  //   {
  //     date: "2023-09-08 13:25:00",
  //     open: 179.6501,
  //     low: 179.5101,
  //     high: 179.69,
  //     close: 179.585,
  //     volume: 286240,
  //   },
  //   {
  //     date: "2023-09-08 13:20:00",
  //     open: 179.67,
  //     low: 179.63,
  //     high: 179.795,
  //     close: 179.655,
  //     volume: 347676,
  //   },
  //   {
  //     date: "2023-09-08 13:15:00",
  //     open: 179.5,
  //     low: 179.48,
  //     high: 179.6995,
  //     close: 179.6676,
  //     volume: 340707,
  //   },
  //   {
  //     date: "2023-09-08 13:10:00",
  //     open: 179.37,
  //     low: 179.26,
  //     high: 179.53,
  //     close: 179.5199,
  //     volume: 356107,
  //   },
  //   {
  //     date: "2023-09-08 13:05:00",
  //     open: 179.395,
  //     low: 179.31,
  //     high: 179.49,
  //     close: 179.3614,
  //     volume: 335007,
  //   },
  //   {
  //     date: "2023-09-08 13:00:00",
  //     open: 179.61,
  //     low: 179.27,
  //     high: 179.63,
  //     close: 179.3985,
  //     volume: 408940,
  //   },
  //   {
  //     date: "2023-09-08 12:55:00",
  //     open: 179.3607,
  //     low: 179.355,
  //     high: 179.62,
  //     close: 179.6181,
  //     volume: 369051,
  //   },
  //   {
  //     date: "2023-09-08 12:50:00",
  //     open: 179.37,
  //     low: 179.21,
  //     high: 179.4399,
  //     close: 179.37,
  //     volume: 403634,
  //   },
  //   {
  //     date: "2023-09-08 12:45:00",
  //     open: 179.505,
  //     low: 179.335,
  //     high: 179.5899,
  //     close: 179.3601,
  //     volume: 356747,
  //   },
  // ];

  //Tomare del historico de precios el valor mas alto y el valos mas bajo, y seran mis referencias de altura para el eje de las 'Y' en el graficos
  //Tomare del historico de precios un rango de tiempo que me define el eje de las 'x'
  const historicalPriceReversed = historicalPrice.reverse();

  const maxHigh = historicalPrice.reduce((max, currentValue) => {
    return Math.max(max, currentValue.high);
  }, -Infinity);

  const maxLow = historicalPrice.reduce((max, currentValue) => {
    return Math.min(max, currentValue.low);
  }, Infinity);

  const positionCandle = historicalPrice.map((currentValue) => {
    return (
      ((maxHigh - currentValue.high) * $viewHeightValue) / (maxHigh - maxLow)
    );
  });

  const maxAxisY = maxHigh - maxLow;

  return (
    <div className="chart">
      {historicalPriceReversed.map((data, index) => (
        <Candle
          key={index}
          date={data.date}
          open={data.open}
          low={data.low}
          high={data.high}
          close={data.close}
          volume={data.volume}
          position={positionCandle[index]}
          maxAxisY={maxAxisY}
        />
      ))}
    </div>
  );
};
