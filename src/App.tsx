import "./App.css";
import { Chart } from "./components/Chart";
import SearchBar from "./components/SearchBar";
import { HistoricalPriceProvider } from "./context/HistoricalPriceContext";

function App() {
  return (
    <HistoricalPriceProvider>
      {
        <>
          <SearchBar />
          <Chart />
        </>
      }
    </HistoricalPriceProvider>
  );
}
export default App;
