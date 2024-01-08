import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base/_global.scss";

import { App } from "./App";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-P43QFPZX",
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
