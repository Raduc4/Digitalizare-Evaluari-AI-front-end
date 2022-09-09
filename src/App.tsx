import React from "react";
import { Route } from "react-router-dom";
import { MainPage } from "./pages";
import { ContextProvider } from "./context";

const App: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <ContextProvider>
        <Route path="/" component={MainPage} />
      </ContextProvider>
    </div>
  );
};

export default App;
