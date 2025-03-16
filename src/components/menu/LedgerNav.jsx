import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users } from 'lucide-react';

const LedgerNavigationMenu = () => {
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  
  const toggleLedgerMenu = () => {
    setIsLedgerOpen(!isLedgerOpen);
  };

  const toggleUsersMenu = () => {
    setIsUsersOpen(!isUsersOpen);
  };
  
  const ledgerMenuItems = [
    { id: 'myLedger', label: 'My Ledger', link: '/My-ledger' },
    { id: 'lenaAurDena', label: 'Lena Aur Dena', link: '/LorD' }
  ];

  const usersMenuItems = [
    { id: 'createUsers', label: 'Create Users', link: '/create-users' },
    { id: 'ssUsers', label: 'SS Users', link: '/SS' }
  ];

  return (
    <li className="relative">
      <a 
        href="#ledger" 
        className="menu-item"
        onClick={(e) => {
          e.preventDefault();
          toggleLedgerMenu();
        }}
      >
        <div className="flex items-center w-full">
          <BookOpen className="menu-icon" />
          <span>Ledger</span>
          {isLedgerOpen ? (
            <ChevronUp className="ml-auto w-4 h-4" />
          ) : (
            <ChevronDown className="ml-auto w-4 h-4" />
          )}
        </div>
      </a>
      
      {isLedgerOpen && (
        <div className="menu-items">
          {ledgerMenuItems.map(item => (
            <a 
              key={item.id}
              href={item.link}
              className="menu-item"
            >
              <BookOpen className="menu-icon" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}

      <a 
        href="#users" 
        className="menu-item"
        onClick={(e) => {
          e.preventDefault();
          toggleUsersMenu();
        }}
      >
        <div className="flex items-center w-full">
          <Users className="menu-icon" />
          <span>Users</span>
          {isUsersOpen ? (
            <ChevronUp className="ml-auto w-4 h-4" />
          ) : (
            <ChevronDown className="ml-auto w-4 h-4" />
          )}
        </div>
      </a>
      
      {isUsersOpen && (
        <div className="menu-items">
          {usersMenuItems.map(item => (
            <a 
              key={item.id}
              href={item.link}
              className="menu-item"
            >
              <Users className="menu-icon" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </li>
  );
};

export default LedgerNavigationMenu;
