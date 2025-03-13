import React from 'react';
import "./Betting.css";

const Betting= () => {
  const matchData = [
    {
      id: 1,
      date: "05/02/2025",
      time: "10:45:00 PM",
      league: "Women's Premier League",
      teams: "",
      hasBM: true,
      hasDesktop: false,
      hasF: false,
      odds: [
        { back: "-", lay: "-" },
        { back: "-", lay: "-" },
        { back: "-", lay: "-" }
      ]
    },
    {
      id: 2,
      date: "05/03/2025",
      time: "02:30:00 PM",
      league: "South Africa V New Zealand",
      teams: "",
      hasBM: true,
      hasDesktop: true,
      hasF: true,
      odds: [
        { back: "7.4", lay: "7.6", backAmount: "2995.78", layAmount: "1247.41" },
        { back: "-", lay: "-", backAmount: "-", layAmount: "-" },
        { back: "1.15", lay: "1.16", backAmount: "167155.41", layAmount: "73081.71" }
      ]
    },
    {
      id: 3,
      date: "05/03/2025",
      time: "04:30:00 PM",
      league: "North West Dragons V Titans",
      teams: "",
      hasBM: true,
      hasDesktop: true,
      hasF: true,
      odds: [
        { back: "5.3", lay: "6.6", backAmount: "16.36", layAmount: "50.87" },
        { back: "-", lay: "-", backAmount: "-", layAmount: "-" },
        { back: "1.18", lay: "1.23", backAmount: "284.55", layAmount: "70.51" }
      ]
    },
    {
      id: 4,
      date: "05/03/2025",
      time: "04:30:00 PM",
      league: "Warriors V Western Province",
      teams: "",
      hasBM: true,
      hasDesktop: true,
      hasF: true,
      odds: [
        { back: "1.55", lay: "1.6", backAmount: "1", layAmount: "1.56" },
        { back: "-", lay: "-", backAmount: "-", layAmount: "-" },
        { back: "2.48", lay: "2.86", backAmount: "2.5", layAmount: "1.14" }
      ]
    },
    {
      id: 5,
      date: "05/03/2025",
      time: "07:30:00 PM",
      league: "India Masters V Australia Masters",
      teams: "",
      hasBM: true,
      hasDesktop: true,
      hasF: true,
      odds: [
        { back: "1.46", lay: "1.47", backAmount: "14.76", layAmount: "72.12" },
        { back: "-", lay: "-", backAmount: "-", layAmount: "-" },
        { back: "3.15", lay: "3.2", backAmount: "33.86", layAmount: "6.73" }
      ]
    },
    {
      id: 6,
      date: "06/03/2025",
      time: "07:30:00 PM",
      league: "Sri Lanka Masters V West Indies Masters",
      teams: "",
      hasBM: true,
      hasDesktop: false,
      hasF: false,
      odds: [
        { back: "1.5", lay: "2.02", backAmount: "25.9", layAmount: "1" },
        { back: "-", lay: "-", backAmount: "-", layAmount: "-" },
        { back: "1.98", lay: "3", backAmount: "1.02", layAmount: "12.95" }
      ]
    },
    {
      id: 7,
      date: "06/03/2025",
      time: "07:30:00 PM",
      league: "Up Warriorz W V Mumbai Indians W",
      teams: "",
      hasBM: true,
      hasDesktop: false,
      hasF: true,
      odds: [
        { back: "2.46", lay: "2.54", backAmount: "16.36", layAmount: "10.69" },
        { back: "-", lay: "-", backAmount: "-", layAmount: "-" },
        { back: "1.65", lay: "1.68", backAmount: "16.46", layAmount: "23.96" }
      ]
    },
    {
      id: 8,
      date: "01/01/2099",
      time: "05:30:00 AM",
      league: "ICC Champions Trophy",
      teams: "",
      hasBM: true,
      hasDesktop: false,
      hasF: false,
      odds: [
        { back: "-", lay: "-", backAmount: "-", layAmount: "-" },
        { back: "-", lay: "-", backAmount: "-", layAmount: "-" },
        { back: "-", lay: "-", backAmount: "-", layAmount: "-" }
      ]
    }
  ];

  return (
    <div className="betting-table-container">
      <table className="betting-table">
        <tbody>
          {matchData.map((match) => (
            <tr key={match.id} className="match-row">
              <td className="match-info">
                <div className="match-date">{match.date} {match.time}</div>
                <div className="match-league">{match.league}</div>
                <div className="match-count">0</div>
              </td>
              <td className="match-icons">
                {match.hasDesktop && <div className="icon desktop-icon"></div>}
                {match.hasBM && <div className="icon bm-icon">BM</div>}
                {match.hasF && <div className="icon f-icon">F</div>}
              </td>
              <td className="odds-container">
                <div className="odds-group">
                  <div className="back-cell">{match.odds[0].back}<div className="amount">{match.odds[0].backAmount}</div></div>
                  <div className="lay-cell">{match.odds[0].lay}<div className="amount">{match.odds[0].layAmount}</div></div>
                </div>
                <div className="odds-group">
                  <div className="back-cell">{match.odds[1].back}<div className="amount">{match.odds[1].backAmount}</div></div>
                  <div className="lay-cell">{match.odds[1].lay}<div className="amount">{match.odds[1].layAmount}</div></div>
                </div>
                <div className="odds-group">
                  <div className="back-cell">{match.odds[2].back}<div className="amount">{match.odds[2].backAmount}</div></div>
                  <div className="lay-cell">{match.odds[2].lay}<div className="amount">{match.odds[2].layAmount}</div></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Betting;