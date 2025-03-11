import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./components/MultiMarkets.jsx";
import "./components/multi_markets.css";
import "./components/ProfitLoss.jsx";
import "./components/ProfitLoss.css";
import "./components/Home.jsx";
import "./components/Statement.jsx";
import "./components/UnSetted.jsx";
import "./components/TermsAndConditions.jsx"
import "./components/EditStakes.jsx"
import "./components/EditStake.css"
import "./components/profile.jsx";
import "./components/Profile.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
