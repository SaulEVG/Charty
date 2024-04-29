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

const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Sumamos 1 porque los meses van de 0 a 11
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const fecthDataAPIHistoricalPrice = async (
  timeFrame: string = "1hour",
  symbol: string = "PRAA",
  fromData: string = "2024-04-01",
  toData: string = getCurrentDate()
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
