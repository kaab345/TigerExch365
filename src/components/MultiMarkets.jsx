import React from "react";
import "./multi_markets.css";


function MultiMarkets() {
  return (
    <div className="bg-[#fdf7f1] min-h-screen pb-20">
   
      {/* Navbar */}
      <nav className="navbar">
        <button className="menu-button" onClick={() => console.log("Sidebar opened")}>
        </button>
        <span>MULTI MARKET</span>
        <div></div> {/* Placeholder for spacing */}
      </nav>

      {/* Market Section */}
      <div className="market-container">
        {/* Women's Premier League */}
        <div className="bookmaker">
          ⭐ BOOKMAKER <span>ℹ</span>
        </div>
        <table className="market-table">
          <tbody>
            <tr>
              <td>Delhi Capitals Women</td>
              <td className="back-odds">210</td>
              <td className="lay-odds suspended">SUSPENDED</td>
            </tr>
            <tr>
              <td>Mumbai Indians Women</td>
              <td className="back-odds">130</td>
              <td className="lay-odds">100000</td>
            </tr>
            <tr>
              <td>RC Bengaluru Women</td>
              <td className="back-odds">250</td>
              <td className="lay-odds">100000</td>
            </tr>
            <tr>
              <td>Gujarat Giants Women</td>
              <td className="back-odds">400</td>
              <td className="lay-odds suspended">SUSPENDED</td>
            </tr>
            <tr>
              <td>UP Warriorz Women</td>
              <td className="back-odds">250</td>
              <td className="lay-odds">100000</td>
            </tr>
          </tbody>
        </table>

        {/* Zimbabwe vs Ireland */}
        <div className="bookmaker">
          ⭐ BM 1 TO 6 OVER <span>ℹ</span>
        </div>
        <table className="market-table">
          <tbody>
            <tr>
              <td>Zimbabwe</td>
              <td className="back-odds">0</td>
              <td className="lay-odds suspended">SUSPENDED</td>
            </tr>
            <tr>
              <td>Ireland</td>
              <td className="back-odds">13</td>
              <td className="lay-odds suspended">20</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Navigation */}
     
    </div>
  );
}

export default MultiMarkets;
