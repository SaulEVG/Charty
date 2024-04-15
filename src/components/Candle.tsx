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
  const edgeBodyCandleTop = open >= close ? open : close;
  const edgeBodyCandleBottom = open >= close ? close : open;

  normalizedDataPrice = {
    bodyNormalized: (Math.abs(open - close) * $viewHeightValue) / maxAxisY,
    highNormalized:
      (Math.abs(edgeBodyCandleTop - high) * $viewHeightValue) / maxAxisY,
    lowNormalized:
      (Math.abs(edgeBodyCandleBottom - low) * $viewHeightValue) / maxAxisY,
  };

  return (
    <>
      <div className="candle" style={{ translate: `1px ${position}vh` }}>
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
    </>
  );
};

export default Candle;
