import "../styles/Candle.css";

let normalizedDataPrice = {
  lowNormalized: 0,
  highNormalized: 0,
  bodyNormalized: 0,
};

const Candle: React.FC<APIDataHistorylPrice> = ({
  date,
  open,
  low,
  high,
  close,
  volume,
}) => {
  const edgeBodyCandle = (value: number): number => {
    if (value >= close) {
      return open;
    } else return close;
  };

  normalizedDataPrice = {
    bodyNormalized: Math.abs(open - close) * 10,
    highNormalized: Math.abs(edgeBodyCandle(open) - high) * 10,
    lowNormalized: Math.abs(edgeBodyCandle(close) - low) * 10,
  };

  return (
    <>
      <div className="candle">
        <div
          className="high"
          style={{ height: normalizedDataPrice.highNormalized }}
        ></div>
        <div
          className="body"
          style={{
            minHeight: 1,
            height: normalizedDataPrice.bodyNormalized,
          }}
        ></div>
        <div
          className="low"
          style={{ height: normalizedDataPrice.lowNormalized }}
        ></div>
      </div>
    </>
  );
};

export default Candle;
