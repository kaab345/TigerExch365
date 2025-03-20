import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// Import Components
import Sidebar from "./components/Siderbar";
import Header from "./components/Header";
import BottomNav from "./components/Bottomnav";

// Import Pages/Components for Routing
import Home from "./components/menu/Home";
import MultiMarkets from "./components/menu/MultiMarkets";
import Create from "./components/menu/create";
import SS from "./components/menu/SS";
import My_ledger from "./components/menu/My_ledger";
import LorD from "./components/menu/LorD";
import ProfitLoss from "./components/menu/ProfitLoss";
import Statement from "./components/menu/Statement";
import UnSetted from "./components/menu/UnSetted";
import TermsAndConditions from "./components/menu/TermsAndConditions";
import EditStakes from "./components/menu/EditStakes";
import Profile from "./components/menu/Profile";
import Change_Password from "./components/menu/Change_Password";
import Dead_Users from "./components/menu/Dead_Users";
import Report from "./components/menu/Report";
import Report_Detail from "./components/Button/Report_Detail";
import Shown from "./components/Button/Shown";
import Moniotor from "./components/Button/Moniotor";
import Betting from "./components/Cricket/Betting";
import Rule from "./components/menu/Rule";
import UserForm from "./components/menu/UserForm";
import Commssion from "./components/menu/Commission";
import Blockmarket from "./components/menu/Blockmarket";
import LotusCasino from "./components/menu/LotusCasino";

function App() {
  const [balance, setBalance] = useState(0.0);
  const [expose, setExpose] = useState(0.0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
    document.body.classList.toggle('sidebar-open');
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add actual logout logic here
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
            <Header toggleSidebar={toggleSidebar} balance={balance} expose={expose} />

            <div className="routes-container">
              <Routes>
                {/* Home and Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/multi-markets" element={<MultiMarkets />} />

                {/* User Management Routes */}
                <Route path="/create-users" element={<Create />} />
                <Route path="/SS" element={<SS />} />
                <Route path="/userform" element={<UserForm />} />

                {/* Ledger and Financial Routes */}
                <Route path="/My-Ledger" element={<My_ledger />} />
                <Route path="/LorD" element={<LorD />} />
                <Route path="/profit-loss" element={<ProfitLoss />} />
                <Route path="/statement" element={<Statement />} />
                <Route path="/unsetted" element={<UnSetted />} />

                {/* Report and Monitoring Routes */}
                <Route path="/Report" element={<Report />} />
                <Route path="/Report_Detail" element={<Report_Detail />} />
                <Route path="/Shown" element={<Shown />} />
                <Route path="/Moniotor" element={<Moniotor />} />

                {/* Casino and Betting Routes */}
                <Route path="/Betting" element={<Betting />} />
                <Route path="/LotusCasino" element={<LotusCasino />} />

                {/* Settings and Profile Routes */}
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/edit-stake" element={<EditStakes />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/change-password" element={<Change_Password />} />
                <Route path="/rule" element={<Rule />} />

                {/* Miscellaneous Routes */}
                <Route path="/Dead_Users" element={<Dead_Users />} />
                <Route path="/Blockmarket" element={<Blockmarket />} />
                <Route path="/Commssion" element={<Commssion />} />

                {/* Dynamic Routes */}
                <Route path="/myledger/:id/:type/:pageNumber/:pageSize/:sortOrder" element={<div>My Ledger</div>} />
                <Route path="/subledger/:id" element={<div>Lena Aur Dena</div>} />
                <Route path="/ss-users" element={<div>SS Users</div>} />
              </Routes>
            </div>
          </main>

          <BottomNav />
        </div>
      </div>
    </Router>
  );
}

export default App;