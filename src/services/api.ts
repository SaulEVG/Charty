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
  timeFrame: string = "1hour",
  symbol: string = "PRAA",
  fromData: string = "2024-04-01",
  toData: string = "2024-04-16"
): Promise<ArrayAPIDataHistoryPrice | undefined> => {
  try {
    const historicalPrice = await fetch(
      END_POINT +
        `historical-chart/${timeFrame}/${symbol}?from=${fromData}&to=${toData}${api_key}`
    ).then((res) => res.json());
    return historicalPrice;
  } catch (error) {
    console.log(error);
  }
};
