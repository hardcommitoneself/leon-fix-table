import * as React from "react";

const DataContext = React.createContext();

export function DataWrapper({ children }) {
  const [data, setData] = React.useState([
    {
      name: "Deliver",
      quantity: 40,
      allocated: 10,
      notAvailable: 0,
      cost: 10,
    },
    {
      name: "White",
      quantity: 30,
      allocated: 10,
      notAvailable: 0,
      cost: 20,
    },
    {
      name: "West cost",
      quantity: 40,
      allocated: 10,
      notAvailable: 0,
      cost: 30,
    },
  ]);

  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  return React.useContext(DataContext);
}
