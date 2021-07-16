import React from "react";
import { GlobalState } from "./GlobalState";
import TopSection from "./TopSection";

const App = () => {
  return (
    <GlobalState>
      <>
        <TopSection />
      </>
    </GlobalState>
  );
};

export default App;
