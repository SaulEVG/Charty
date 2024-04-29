import React, { useState } from "react";
import Candle from "./Candle";
import "../styles/Chart.css";
import { useHistoricalPrice } from "../context/HistoricalPriceContext";

const $viewHeightValue = 80;

export const Chart: React.FC = () => {
  const historicalPrice = useHistoricalPrice();
  const [isHovering, setIsHovering] = useState(false);
  const [mousePositionX, setMousePositionX] = useState(0);
  const [mousePositionY, setMousePositionY] = useState(0);
  const [axisY, setAxisY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    console.log(isDragging);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    console.log(isDragging);
  };
  const mouseEnter = () => {
    setIsHovering(true);
  };

  const mouseLeave = () => {
    setIsHovering(false);
  };

  const mousePosition = (e: MouseEvent) => {
    const rangeValueChartY: number =
      9 + +(e.clientY / window.innerHeight).toFixed(4) * 100;
    const fixedRange = -1.2435 * rangeValueChartY + 125;
    const priceRange = ((maxAxisY * fixedRange) / 100 + maxLow).toFixed(2);
    setAxisY(priceRange);

    setMousePositionX((e.clientX / window.innerWidth - 0.05) * 100);
    setMousePositionY((e.clientY / window.innerHeight - 0.115) * 100);
  };

  //Tomare del historico de precios el valor mas alto y el valos mas bajo, y seran mis referencias de altura para el eje de las 'Y' en el graficos
  //Tomare del historico de precios un rango de tiempo que me define el eje de las 'x'
  const maxHigh = historicalPrice.reduce((max, currentValue) => {
    return Math.max(max, currentValue.high);
  }, -Infinity);

  const maxLow = historicalPrice.reduce((max, currentValue) => {
    return Math.min(max, currentValue.low);
  }, Infinity);

  const maxAxisY = maxHigh - maxLow;

  const positionCandle = historicalPrice.map((currentValue) => {
    return ((maxHigh - currentValue.high) * $viewHeightValue) / maxAxisY;
  });

  return (
    <>
      {historicalPrice.length > 0 && (
        <div className="maxHigh">{maxHigh.toFixed(2)}</div>
      )}
      <div
        className="chart"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onMouseMove={mousePosition}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {historicalPrice.map((data, index) => (
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
            mousePositionX={mousePositionX}
          />
        ))}
        {isHovering && (
          <>
            <div
              className="axisY"
              style={{ translate: `${mousePositionX}vw` }}
            ></div>
            <div
              className="axisX"
              style={{ translate: `0px ${mousePositionY}vh` }}
            >
              <div style={{ translate: "45.5vw" }}>
                {axisY < maxHigh && axisY > maxLow && axisY}
              </div>
            </div>
          </>
        )}
      </div>
      {historicalPrice.length > 0 && (
        <div className="maxLow">{maxLow.toFixed(2)}</div>
      )}
    </>
  );
};
