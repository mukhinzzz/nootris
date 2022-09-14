import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./view/App";
import { Normalize } from "styled-normalize";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>
);
