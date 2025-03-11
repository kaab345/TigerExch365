import React, { useState, useEffect, useCallback, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { FaChartLine, FaList, FaUser, FaMoon, FaSun, FaSignOutAlt, FaBars, FaStopwatch, FaStar, FaHome, FaDice, FaGamepad } from "react-icons/fa";
import "./App.css";
import MultiMarkets from "./components/MultiMarkets";
import ProfitLoss from "./components/ProfitLoss";
import Home from "./components/Home";
import Statement from "./components/Statement";
import UnSetted from "./components/UnSetted";
import TermsAndConditions from "./components/TermsAndConditions"; 
import EditStakes from "./components/EditStakes";
import Profile from "./components/profile";

// Bottom Navigation Component
const BottomNav = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth <= 375); // Show nav only for iPhone SE size
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  if (!isVisible) return null; // Hide nav if not iPhone SE size

  return (
    <nav className="bottom-nav">
      <Link to="/in-play" className={`flex flex-col items-center ${getActiveClass('/in-play')}`}>
        <FaStopwatch />
        <span>IN-PLAY</span>
      </Link>
      <Link to="/multi-markets" className={`flex flex-col items-center ${getActiveClass('/multi-markets')}`}>
        <FaStar />
        <span>MULTI</span>
      </Link>
      <Link to="/Home" className={`flex flex-col items-center ${getActiveClass('/Home')}`}>
        <FaHome />
        <span>HOME</span>
      </Link>
      <Link to="/casino" className={`flex flex-col items-center ${getActiveClass('/casino')}`}>
        <FaDice />
        <span>CASINO</span>
      </Link>
      <Link to="/icasino" className={`flex flex-col items-center ${getActiveClass('/icasino')}`}>
        <FaGamepad />
        <span>ICASINO</span>
      </Link>
    </nav>
  );
};

function App() {
  const [balance, setBalance] = useState(0.0);
  const [expose, setExpose] = useState(0.0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // This toggles the sidebar and sets a class on the body for styling
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
    document.body.classList.toggle('sidebar-open');
  };
  
  return (
    <Router>
      <div className={`flex flex-col min-h-screen pb-14 ${sidebarOpen ? 'sidebar-overlay' : ''}`}>
        {/* Header Component */}
        <header className="header-container">
          <div className="top-bar">
            <div className="balance">
              <span>Balance :</span>{" "}
              <span className="highlight">
                {balance?.toFixed(2) || "0.00"} PTI
              </span>
            </div>
            <div className="exposure">
              Exp : <span className="highlight">{expose?.toFixed(2) || "0.00"}</span>
            </div>
          </div>
          <nav className="nav-bar">
            <a href="https://tiger365.me" target="_blank" rel="noopener noreferrer">
              <img
                src="https://tiger365.me/tiger365.me/images/logo-text.png"
                alt="TigerExch Logo"
                className="logo"
              />
            </a>
          </nav>
          <div className="announcement ticker">
            <p>
              We have launched 4500+ games in new I-casino. Please note: In new
              I-casino, 1 point = 100 points.
            </p>
          </div>
        </header>

        <div className="flex flex-grow relative">
          {/* Menu Toggle Button - Move inside layout but outside sidebar */}
          <button 
            className="menu-toggle" 
            onClick={toggleSidebar} 
            aria-label="Toggle Menu"
          >
            <FaBars />
          </button>
          
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main Content - Replace flex-grow div with main-content class */}
          <div className={`main-content ${sidebarOpen ? 'blur-background' : ''}`}>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/multi-markets" element={<MultiMarkets />} />
              <Route path="/profit-loss" element={<ProfitLoss />} />
              <Route path="/statement" element={<Statement />} />
              <Route path="/unsetted" element={<UnSetted />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/edit-stake" element={<EditStakes/>} />
              <Route path="/Profile" element={<Profile/>} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </Router>
  );
}

// Updated Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(false);
  const sidebarRef = useRef(null);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && 
          !sidebarRef.current.contains(event.target) &&
          !event.target.classList.contains('menu-toggle')) {
        toggleSidebar();
      }
    };
    
    if (isOpen && window.innerWidth < 768) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleSidebar]);
  
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  }, []);
  
  const handleLogout = useCallback(() => {
    alert("Logging out...");
  }, []);
  
  const menuItems = [
    { name: "Home", icon: <FaList />, link: "/Home" },
    { name: "Multi Markets", icon: <FaChartLine />, link: "/multi-markets" },
    { name: "Profit Loss", icon: <FaChartLine />, link: "/profit-loss" },
    { name: "A/C Statement", icon: <FaList />, link: "/statement" },
    { name: "Un-Settled Bets", icon: <FaList />, link: "/unsetted" },
    { name: "T & C", icon: <FaList />, link: "/terms-and-conditions" },
    { name: "Rules", icon: <FaList />, link: "#" },
    { name: "Edit Stakes", icon: <FaList />, link: "/edit-stake" },
    { name: "Profile (demo123)", icon: <FaUser />, link: "/Profile" },
  ];
  
  return (
    <div 
      ref={sidebarRef} 
      className={`sidebar ${darkMode ? "dark-mode" : ""} ${isOpen ? "open" : ""}`}
    >
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <Link to={item.link} className="sidebar-link" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              {item.icon} <span>{item.name}</span>
            </Link>
          </li>
        ))}
        
        {/* Dark Mode Toggle */}
        <li className="sidebar-item dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />} <span>Mode: {darkMode ? "Dark" : "Light"}</span>
        </li>
        
        {/* Logout Button */}
        <li className="sidebar-item logout" onClick={handleLogout}>
          <button className="sidebar-link">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default App;