import { useState } from "react";
import "../styles/Candle.css";

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
  mousePositionX,
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

  const highNormalized =
    ((high - edgeBodyCandleTop) * $viewHeightValue) / maxAxisY;
  const bodyNormalized =
    ((edgeBodyCandleTop - edgeBodyCandleBottom) * $viewHeightValue) / maxAxisY;
  const lowNormalized =
    ((edgeBodyCandleBottom - low) * $viewHeightValue) / maxAxisY;

  return (
    <>
      <div
        className="candle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ translate: `0px ${position}vh` }}
      >
        <div className="high" style={{ height: `${highNormalized}vh` }}></div>
        <div
          className="body"
          style={{
            minHeight: "0.01vh",
            height: `${bodyNormalized}vh`,
            backgroundColor: open > close ? "red" : "green",
          }}
        ></div>
        <div className="low" style={{ height: `${lowNormalized}vh` }}></div>
      </div>
      {isHovering && (
        <>
          <div className="data">
            O: {open} C: {close} H: {high} L: {low}
          </div>
          <div
            className="date"
            style={{ translate: `${mousePositionX - 6}vw` }}
          >
            {date}
          </div>
        </>
      )}
    </>
  );
};

export default Candle;
