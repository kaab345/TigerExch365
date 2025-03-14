import React from "react";
import "./Home.css";

// Navigation Items
const navItems = [
  { name: "FEATURED", icon: "star-selected.svg", count: 4, link: "./featured" },
  { name: "CRICKET", icon: "icon-cricket.svg", count: 11, link: "./Betting" },
  { name: "FOOTBALL", icon: "icon-football.svg", count: 15, link: "./football" },
  { name: "TENNIS", icon: "icon-tennis.svg", count: 15, link: "./tennis" },
  { name: "HORSE RACING", icon: "icon-horse.svg", count: 18, link: "./horse-racing" },
  { name: "GREYHOUND RACING", icon: "icon-greyhound.svg", count: 54, link: "./greyhound-racing" },
  { name: "KABADDI", icon: "kabaddi.svg", count: 0, link: "./kabaddi" },
  { name: "POLITICS", icon: "icon-politics.svg", count: 0, link: "./politics" },
];

// Games Data
const games = [
  { image: "https://tiger365.me/assets/casino/aviator.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/sicbo.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/dragon.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/baccarat.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/auto-roulete.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/wheel-of-fortune.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/c1-teen.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/c1-andar.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/c1-poker.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/c1-7updown.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/c1-t20.png", link: "#" },
  { image: "https://tiger365.me/assets/casino/c1-amar.png", link: "#" },
];

// First Set of Races
const races1 = [
  { id: 1, url: "#", flag: "https://flagcdn.com/h40/au.png", time: "04:15 PM", name: "R8 1200m 3yo" },
  { id: 2, url: "#", flag: "https://flagcdn.com/h40/au.png", time: "04:19 PM", name: "R8 1609m Pace M" },
  { id: 3, url: "#", flag: "https://flagcdn.com/h40/au.png", time: "04:27 PM", name: "R3 2130m Pace M" },
  { id: 4, url: "#", flag: "https://flagcdn.com/h40/za.png", time: "04:30 PM", name: "R2 1200m Mdn" },
  { id: 5, url: "#", flag: "https://flagcdn.com/h40/au.png", time: "04:40 PM", name: "R8 1000m CL3" },
  { id: 6, url: "#", flag: "https://flagcdn.com/h40/au.png", time: "04:47 PM", name: "R9 2030m Pace M" },
  { id: 7, url: "#", flag: "https://flagcdn.com/h40/au.png", time: "04:55 PM", name: "R4 2130m Pace M" },
  { id: 8, url: "#", flag: "https://flagcdn.com/h40/za.png", time: "05:05 PM", name: "R3 1200m Mdn" },
  { id: 9, url: "#", flag: "https://flagcdn.com/h40/au.png", time: "05:20 PM", name: "R5 1730m Pace M" },
  { id: 10, url: "#", flag: "https://flagcdn.com/h40/za.png", time: "05:40 PM", name: "R4 2000m Hcap" },
  { id: 11, url: "#", flag: "https://flagcdn.com/h40/au.png", time: "05:51 PM", name: "R6 1730m Pace M" },
  { id: 12, url: "#", flag: "https://flagcdn.com/h40/za.png", time: "06:15 PM", name: "R5 1200m Hcap" },
];

// Second Set of Races
const races2 = [
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "11:51 PM", name: "OR 450m" },
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "11:56 PM", name: "A1 500m" },
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "11:59 PM", name: "D4 275m" },
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "12:01 AM", name: "OR1 480m" },
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "12:07 AM", name: "D4 277m" },
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "12:09 AM", name: "OR 450m" },
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "12:12 AM", name: "A1 500m" },
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "12:16 AM", name: "B3 450m" },
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "12:18 AM", name: "OR1 480m" },
  { link: "#", flag: "https://flagcdn.com/h40/gb.png", time: "12:23 AM", name: "A4 491m" },
];

// Sample Sports Data
const sportsData = [
  {
    category: "CRICKET",
    events: [
      {
        date: "02/03/2025 02:30:00 PM",
        teams: "New Zealand V India",
        score: "0",
        odds: [
          ["India", "New Zealand"],
          ["1.5", "2.3"]
        ]
      },
      {
        date: "26/02/2025 09:30:00 AM",
        teams: "Vidarbha V Kerala",
        score: "0",
        odds: []
      }
    ]
  },
  {
    category: "FOOTBALL",
    events: [
      {
        date: "02/03/2025 08:30:00 PM",
        teams: "Manchester United V Liverpool",
        score: "2-1",
        odds: [
          ["Man Utd", "Draw", "Liverpool"],
          ["2.1", "3.4", "2.8"]
        ]
      }
    ]
  }
];

// Race Component
const Race = ({ race }) => {
  return (
    <a href={race.link || race.url} className="chip">
      <img src={race.flag} alt="Race Flag" style={{ borderRadius: '0px', width: '36px', height: '24px' }} />
      <div className="race_detail">
        <span className="race_time">{race.time}</span>
        <span className="race-name">{race.name}</span>
      </div>
    </a>
  );
};

// Sports Events Component
const SportsEvents = () => {
  return (
    <div className="section-Events">
      <div className="section-Event">FEATURED EVENTS</div>
      {sportsData.map((sport, index) => (
        <div key={index}>
          <div className="section-Event">{sport.category}</div>
          {sport.events.map((event, idx) => (
            <div key={idx} className="event-card">
              <div>
                <p className="event-time">{event.date}</p>
                <p className="event-title">{event.teams}</p>
                <p className="event-score">{event.score}</p>
              </div>
              <div className="badges">
                <span className="badge">BM</span>
                <span className="badge">F</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        {/* Navigation Section */}
        <div className="section-wrapper">
          <nav className="nav-section">
            <ul className="nav-items">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>
                    <img src={`https://tiger365.me/tiger365.me/images/${item.icon}`} alt={item.name} />
                    <span>{item.count}</span>
                    <p>{item.name}</p>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Games Section */}
        <div className="section-wrapper">
          <div className="games-container">
            {games.map((game, index) => (
              <div key={index} className="game-item">
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  <img src={game.image} alt="Game" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Horse Racing Section */}
        <div className="section-wrapper">
          <div className="race-container">
            <h3 className="race-title">Horse Racing</h3>
            <div className="race-scroll">
              {races1.map((race) => (
                <Race key={race.id} race={race} />
              ))}
            </div>
          </div>
        </div>

        {/* Greyhound Racing Section */}
        <div className="section-wrapper">
          <div className="race-container">
            <h3 className="race-title">Greyhound Racing</h3>
            <div className="race-scroll">
              {races2.map((race, index) => (
                <Race key={index} race={race} />
              ))}
            </div>
          </div>
        </div>

        {/* Sports Events Section */}
        <div className="section-wrapper">
          <SportsEvents />
        </div>
      </div>
    </div>
  );
};

export default Home;