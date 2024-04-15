const api_key = `&apikey=` + import.meta.env.VITE_API_KEY;
const END_POINT = "https://financialmodelingprep.com/api/v3/";

export const fecthDataAPISearch = async (
  symbol: string
): Promise<ArrayAPIDataSearch | undefined> => {
  try {
    const listSymbols = await fetch(
      END_POINT + `search?query=${symbol}&limit=10${api_key}`
    ).then((res) => res.json());
    return listSymbols;
  } catch (error) {
    console.log(error);
  }
};


export const fecthDataAPIHistoricalPrice = async (
  timeFrame: string,
  symbol: string,
  fromData: string,
  toData: string
): Promise<ArrayAPIDataHistoryPrice | undefined> => {
  try {
    const historicalPrice = await fetch(
      END_POINT +
        `historical-chart/${timeFrame}/${symbol}?from=${fromData}-10&to=${toData}${api_key}`
    ).then((res) => res.json());
    return historicalPrice;
  } catch (error) {
    console.log(error);
  }
};
