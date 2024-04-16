import { useState } from "react";
import "../styles/Candle.css";

let normalizedDataPrice = {
  lowNormalized: 0,
  highNormalized: 0,
  bodyNormalized: 0,
};
const $viewHeightValue = 80;

const Candle: React.FC<APIDataHistorylPrice> = ({
  date,
  open,
  low,
  high,
  close,
  volume,
  position,
  maxAxisY,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const edgeBodyCandleTop = open >= close ? open : close;
  const edgeBodyCandleBottom = open >= close ? close : open;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  normalizedDataPrice = {
    bodyNormalized: (Math.abs(open - close) * $viewHeightValue) / maxAxisY,
    highNormalized:
      (Math.abs(edgeBodyCandleTop - high) * $viewHeightValue) / maxAxisY,
    lowNormalized:
      (Math.abs(edgeBodyCandleBottom - low) * $viewHeightValue) / maxAxisY,
  };

  return (
    <>
      <div
        className="candle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          translate: `0px ${position}vh`,
        }}
      >
        <div
          className="high"
          style={{ height: `${normalizedDataPrice.highNormalized}vh` }}
        ></div>
        <div
          className="body"
          style={{
            minHeight: 1,
            height: `${normalizedDataPrice.bodyNormalized}vh`,
            backgroundColor: open > close ? "red" : "green",
          }}
        ></div>
        <div
          className="low"
          style={{ height: `${normalizedDataPrice.lowNormalized}vh` }}
        ></div>
      </div>
      {isHovering && (
        <>
          <div className="data">
            O: {open} C: {close} H: {high} L: {low}
          </div>
          <div className="date">{date}</div>
          <div className="axisY"></div>
        </>
      )}
    </>
  );
};

export default Candle;
