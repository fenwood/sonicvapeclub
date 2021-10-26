import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ReactGA from "ga-4-react";

const TRACKING_ID = "G-V1PGJ70F7H";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

try {
  setTimeout((_) => {
    const ga4react = new ReactGA(TRACKING_ID);
    ga4react.initialize();
  }, 4000);
} catch (err) {}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
