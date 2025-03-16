import React, { useState, useEffect, useCallback, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { FaChartLine, FaList, FaUser, FaMoon, FaSun, FaSignOutAlt, FaBars, FaStopwatch, FaStar, FaHome, FaDice, FaGamepad, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faChevronUp, 
  faChevronDown, 
  faPlus, 
  faUsers, 
  faFutbol 
} from '@fortawesome/free-solid-svg-icons'
import "./App.css";
import MultiMarkets from "./components/menu/MultiMarkets";
import Create from "./components/menu/create"; // Fixed import with proper capitalization
import SS from "./components/menu/SS";
import My_ledger from "./components/menu/My_ledger";
import LorD from "./components/menu/LorD";
import ProfitLoss from "./components/menu/ProfitLoss";
import Home from "./components/menu/Home";
import Statement from "./components/menu/Statement";
import UnSetted from "./components/menu/UnSetted";
import TermsAndConditions from "./components/menu/TermsAndConditions"; 
import EditStakes from "./components/menu/EditStakes";
import Profile from "./components/menu/Profile";
import Betting from "./components/Cricket/Betting";
import Rule from "./components/menu/Rule";
import UserForm from "./components/menu/UserForm.jsx"; // added import for UserForm

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
  const [darkMode, setDarkMode] = useState(false); // Added missing state for dark mode
  
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
    document.body.classList.toggle('sidebar-open');
  };
  
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout clicked");
  };
  
  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
        <Sidebar 
          isOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar} 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          handleLogout={handleLogout}
        />
        
        <div className="content-wrapper">
          <main className="main-content">
            {/* Header moved inside main content */}
            <header className="header-container">
              <button 
                className="menu-toggle" 
                onClick={toggleSidebar} 
                aria-label="Toggle Menu"
              >
                <FaBars />
              </button>

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

            {/* Routes section */}
            <div className="routes-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/multi-markets" element={<MultiMarkets />} />
                <Route path="/create-users" element={<Create />} /> {/* Updated route path */}
                <Route path="/SS" element={<SS />} /> {/* Updated route path */}
                <Route path="/My-Ledger" element={<My_ledger />} />
                <Route path="/LorD" element={<LorD />} />
                <Route path="/profit-loss" element={<ProfitLoss />} />
                <Route path="/statement" element={<Statement />} />
                <Route path="/unsetted" element={<UnSetted />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/edit-stake" element={<EditStakes/>} />
                <Route path="/Profile" element={<Profile/>} />
                <Route path="/Betting" element={<Betting/>} />
                <Route path="/rule" element={<Rule />} />
                <Route path="/myledger/:id/:type/:pageNumber/:pageSize/:sortOrder" element={<div>My Ledger</div>} />
                <Route path="/subledger/:id" element={<div>Lena Aur Dena</div>} />
                <Route path="/ss-users" element={<div>SS Users</div>} />
                <Route path="/userform" element={<UserForm />} /> {/* added route for UserForm */}
              </Routes>
            </div>
          </main>

          <BottomNav />
        </div>
      </div>
    </Router>
  );
}

// Updated Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar, darkMode, toggleDarkMode, handleLogout }) => {
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const location = useLocation();

  // Add menuItems definition here
  const menuItems = [
    {
      name: "Home",
      icon: <img className="menu-icon" src="https://tiger365.me/tiger365.me/images/home.svg" alt="Home" />,
      link: "/Home"
    },
    {
      name: "Multi Markets",
      icon: <img className="menu-icon" src="https://tiger365.me/tiger365.me/images/multi.svg" alt="Multi Markets" />,
      link: "/multi-markets"
    },
    {
      name: "Users",
      icon: <FontAwesomeIcon icon={faUsers} className="menu-icon" />,
      link: "#",
      isParent: true,
      children: [
        {
          name: "Create Users",
          icon: <FontAwesomeIcon icon={faPlus} className="menu-icon" />,
          link: "/create-users",
        },
        {
          name: "SS Users",
          icon: <FontAwesomeIcon icon={faUsers} className="menu-icon" />,
          link: "/SS",
        }
      ]
    },
    {
      name: "Ledger",
      icon: <FontAwesomeIcon icon={faFutbol} className="menu-icon" />,
      link: "#",
      isParent: true,
      children: [
        {
          name: "My Ledger",
          icon: <FontAwesomeIcon icon={faFutbol} className="menu-icon" />,
          link: "/My-ledger",
        },
        {
          name: "Lena Aur Dena",
          icon: <FontAwesomeIcon icon={faFutbol} className="menu-icon" />,
          link: "/LorD",
        }
      ]
    },
    {
      name: "Profit Loss",
      icon: <img className="menu-icon" src="https://tiger365.me/tiger365.me/images/profitloss.svg" alt="Profit Loss" />,
      link: "/profit-loss"
    },
    {
      name: "A/C Statement",
      icon: <img className="menu-icon" src="https://tiger365.me/tiger365.me/images/statement.svg" alt="A/C Statement" />,
      link: "/statement"
    },
    {
      name: "Un-Settled Bets",
      icon: <img className="menu-icon" src="https://tiger365.me/tiger365.me/images/bets.svg" alt="Un-Settled Bets" />,
      link: "/unsetted"
    },
    {
      name: "T & C",
      icon: <img className="menu-icon" src="https://tiger365.me/tiger365.me/images/terms.svg" alt="T & C" />,
      link: "/terms-and-conditions"
    },
    {
      name: "Rules",
      icon: <img className="menu-icon" src="https://tiger365.me/tiger365.me/images/terms.svg" alt="Rules" />,
      link: "/rule"
    },
    {
      name: "Edit Stakes",
      icon: <img className="menu-icon" src="https://tiger365.me/tiger365.me/images/edit.svg" alt="Edit Stakes" />,
      link: "/edit-stake"
    },
    {
      name: "Profile (demo123)",
      icon: <img className="menu-icon" src="https://tiger365.me/tiger365.me/images/profile.svg" alt="Profile" />,
      link: "/Profile"
    },
  ];

  const toggleDropdown = (index) => {
    setExpandedDropdown(expandedDropdown === index ? null : index);
  };

  // Remove the useEffect and sidebarRef since we don't want click outside behavior

  return (
    <div 
      className={`sidebar ${darkMode ? "dark-mode" : ""} ${isOpen ? "open" : ""}`}
    >
      <div className="sidebar-logo">
        <div className="text-logo">
          <span className="logo-orange">PUNT</span>
          <span className="logo-blue">EXCH</span>
        </div>
        {isOpen && (
          <button 
            className="sidebar-close-btn" 
            onClick={toggleSidebar} 
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>
        )}
      </div>
      
      <ul className="sidebar-menu">
        {menuItems.flatMap((item, index) => {
          const itemsArr = [];
          // Render parent item
          itemsArr.push(
            <li key={`parent-${index}`} className={`sidebar-item ${location.pathname === item.link ? 'active' : ''} ${item.isChild ? 'menu-child' : ''} ${item.isParent ? 'menu-parent' : ''}`}>
              <Link 
                to={item.link}
                className="sidebar-link"
                onClick={(e) => {
                  if (item.isParent) {
                    e.preventDefault();
                    toggleDropdown(index);
                  } else if (window.innerWidth < 768) {
                    toggleSidebar();
                  }
                }}
              >
                {item.icon} <span>{item.name}</span>
              </Link>
            </li>
          );
          // If parent is expanded, insert its children as separate list items
          if (item.isParent && expandedDropdown === index) {
            item.children.forEach((child, childIndex) => {
              itemsArr.push(
                <li key={`child-${index}-${childIndex}`} className="sidebar-item menu-child">
                  <Link 
                    to={child.link} 
                    className="sidebar-link"
                    onClick={() => window.innerWidth < 768 && toggleSidebar()}
                  >
                    {child.icon} <span>{child.name}</span>
                  </Link>
                </li>
              );
            });
          }
          return itemsArr;
        })}
        
        <li className="sidebar-item dark-mode-toggle" onClick={toggleDarkMode}>
          <div className="sidebar-link">
            <img 
              src="https://tiger365.me/tiger365.me/images/contrast.svg" 
              alt="Contrast Icon" 
              className="menu-icon" 
            />
            <span>Mode: {darkMode ? "Dark" : "Light"}</span>
          </div>
        </li>
        
        <li className="sidebar-item">
          <div className="sidebar-link" onClick={handleLogout}>
            <img 
              src="https://tiger365.me/tiger365.me/images/logout.svg" 
              alt="Logout" 
              className="menu-icon" 
            />
            <span>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default App;