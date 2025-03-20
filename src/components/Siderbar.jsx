import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUsers, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar, darkMode, toggleDarkMode, handleLogout }) => {
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const location = useLocation();

  // Define all menu items with links and icons
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
        },
        {
          name: "SP Users",
          icon: <FontAwesomeIcon icon={faUsers} className="menu-icon" />,
          link: "/#",
        },
        {
          name: "SA Users",
          icon: <FontAwesomeIcon icon={faUsers} className="menu-icon" />,
          link: "/#",
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
          link: "/My-Ledger",
        },
        {
          name: "Lena Aur Dena",
          icon: <FontAwesomeIcon icon={faFutbol} className="menu-icon" />,
          link: "/LorD",
        }
      ]
    },
    {
      name: "Report",
      icon: <img className="menu-icon" src="https://img.icons8.com/fluency/96/report-file.png" alt="Report" />,
      link: "/Report"
    },
    {
      name: "Dead Users",
      icon: <img className="menu-icon" src="https://img.icons8.com/arcade/64/die-in-bed.png" alt="Dead User" />,
      link: "/Dead_Users"
    },
    {
      name: "Block Market",
      icon: <img className="menu-icon" src="https://img.icons8.com/hatch/64/1A1A1A/security-block.png" alt="Block Market" />,
      link: "/Blockmarket"
    },
    {
      name: "Live Casino",
      icon: <img className="menu-icon" src="https://img.icons8.com/ios-filled/50/chip--v2.png" alt="Live Casino" />,
      link: "/#"
    },
    {
      name: "Lotus Casino",
      icon: <img className="menu-icon" src="https://img.icons8.com/ios-filled/50/chip--v1.png" alt="Lotus Casino" />,
      link: "/LotusCasino"
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
    {
      name: "Change Password",
      icon: <img className="menu-icon" src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/external-change-password-basic-ui-elements-2.3-sbts2018-solid-sbts2018.png" alt="Change Password" />,
      link: "/change-password"
    }
  ];

  const toggleDropdown = (index) => {
    setExpandedDropdown(expandedDropdown === index ? null : index);
  };

  return (
    <div className={`sidebar ${darkMode ? "dark-mode" : ""} ${isOpen ? "open" : ""}`}>
      <div className="sidebar-logo">
        <div className="text-logo">
          <span className="logo-orange">PUNT</span>
          <span className="logo-blue">EXCH</span>
        </div>
        {isOpen && (
          <button className="sidebar-close-btn" onClick={toggleSidebar} aria-label="Close Sidebar">
            <FaTimes />
          </button>
        )}
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => {
          const itemsArr = [];
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
          <Link to="/Commssion" className="sidebar-link">
            <img 
              className="menu-icon" 
              src="https://img.icons8.com/ios-filled/50/info-popup.png" 
              alt="Missing Commission" 
            />
            <span>Missing Commission</span>
          </Link>
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

export default Sidebar;