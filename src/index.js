import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppProvider } from "./context/Context";
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector("#root")
);
