import React from "react";
import { FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar, balance, expose }) => {
  return (
    <header className="header-container">
      <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle Menu">
        <FaBars />
      </button>

      <div className="top-bar">
        <div className="balance">
          <span>Balance :</span>{" "}
          <span className="highlight">{balance?.toFixed(2) || "0.00"} PTI</span>
        </div>
        <div className="exposure">
          Exp : <span className="highlight">{expose?.toFixed(2) || "0.00"}</span>
        </div>
      </div>
      <div className="sidebar-logo">
        <div className="text-logo">
          <span className="logo-orange">PUNT</span>
          <span className="logo-blue">EXCH</span>
        </div>
      </div>
      <div className="announcement ticker">
        <p>
          We have launched 4500+ games in new I-casino. Please note: In new I-casino, 1 point = 100 points.
        </p>
      </div>
    </header>
  );
};

export default Header;