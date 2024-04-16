import React, { createContext, useContext, useState } from "react";

// Definir el contexto
const HistoricalPriceContext = createContext<ArrayAPIDataHistoryPrice>([]);
const HistoricalPriceUpdateContext = createContext<
  React.Dispatch<React.SetStateAction<ArrayAPIDataHistoryPrice>>
>(() => {});

// Proveedor del contexto
export const HistoricalPriceProvider: React.FC = ({ children }) => {
  const [historicalPrice, setHistoricalPrice] =
    useState<ArrayAPIDataHistoryPrice>([]);

  return (
    <HistoricalPriceContext.Provider value={historicalPrice}>
      <HistoricalPriceUpdateContext.Provider value={setHistoricalPrice}>
        {children}
      </HistoricalPriceUpdateContext.Provider>
    </HistoricalPriceContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useHistoricalPrice = () => useContext(HistoricalPriceContext);
export const useUpdateHistoricalPrice = () =>
  useContext(HistoricalPriceUpdateContext);
