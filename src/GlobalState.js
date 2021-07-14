import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export function GlobalState({ children }) {
  const [number, setNumber] = useState(0);

  const clickebBtn = () => {
    setNumber(1);
  };

  return (
    <StateContext.Provider value={{ number, clickebBtn }}>
      {children}
    </StateContext.Provider>
  );
}
