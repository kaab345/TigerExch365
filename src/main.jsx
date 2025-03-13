import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./components/menu/MultiMarkets.jsx";
import "./components/menu/multi_markets.css";
import "./components/menu/ProfitLoss.jsx";
import "./components/menu/ProfitLoss.css";
import "./components/menu/Home.jsx";
import "./components/menu/Statement.jsx";
import "./components/menu/UnSetted.jsx";
import "./components/menu/TermsAndConditions.jsx"
import "./components/menu/EditStakes.jsx"
import "./components/menu/EditStake.css"
import "./components/menu/Profile.jsx";
import "./components/menu/Profile.css";
import "./components/Cricket/Betting.jsx"
import "./components/Cricket/Betting.css";
import "./components/menu/Rule.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
