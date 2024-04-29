interface APIDataSearch {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

interface ArrayAPIDataSearch extends Array<APIDataSearch> {}

interface APIDataHistorylPrice {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
  position?: number;
  maxAxisY: number;
  mousePositionX: number;
}

interface ArrayAPIDataHistoryPrice extends Array<APIDataHistorylPrice> {}
