import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User } from 'lucide-react';

const UserNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const menuItems = [
    { id: 'createUser', label: 'Create User', link: '/selectupline/3', visible: true },
    { id: 'mmmenu', label: 'SS', link: '/myclient/0/4/1/100', visible: true }
  ];

  return (
    <li className="relative px-4 py-2 sm:px-6 sm:py-3">
      <a 
        href="#pages" 
        className="menu-item flex items-center hover:bg-gray-100 transition-colors rounded-lg shadow-sm"
        onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
      >
        <div className="flex items-center w-full text-sm sm:text-base">
          <User className="menu-icon" />
          <span>Users</span>
          {isOpen ? (
            <ChevronUp className="ml-auto w-4 h-4" />
          ) : (
            <ChevronDown className="ml-auto w-4 h-4" />
          )}
        </div>
      </a>
      
      {isOpen && (
        <div className="menu-items flex flex-col gap-2 mt-2">
          {menuItems.map(item => (
            <a 
              key={item.id}
              href={item.link}
              className="menu-item flex items-center hover:bg-gray-100 transition-colors p-2 rounded-lg shadow-sm text-sm sm:text-base"
            >
              <User className="menu-icon" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </li>
  );
};

export default UserNavigationMenu;