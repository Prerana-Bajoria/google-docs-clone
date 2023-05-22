import React from "react";
import Header from "./components/Header";
import Page from "./components/Page";

import "./index.js";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Page />
      </div>
    </div>
  );
}

export default App;
