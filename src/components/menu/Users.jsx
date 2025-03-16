import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, Users } from 'lucide-react';

const UserNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedUser, setSelectedUser] = useState('Create User');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const selectUser = (label) => {
    setSelectedUser(label);
    setShowDropdown(false);
  };
  
  const menuItems = [
    { id: 'createUser', label: 'Create User', link: '/selectupline/3', visible: true },
    { id: 'samenu', label: 'BA', link: '/myclient/0/1/1/100', visible: false },
    { id: 'mamenu', label: 'SC', link: '/myclient/0/2/1/100', visible: false },
    { id: 'smmenu', label: 'SST', link: '/myclient/0/3/1/100', visible: false },
    { id: 'mmmenu', label: 'SS', link: '/myclient/0/4/1/100', visible: true },
    { id: 'ammenu', label: 'SA', link: '/myclient/0/5/1/100', visible: false },
    { id: 'cmmenu', label: 'User', link: '/myclient/0/6/1/100', visible: false }
  ];

  // Filter visible menu items
  const visibleMenuItems = menuItems.filter(item => item.visible);

  // Use User icon instead of Users to avoid any potential issues
  const UserIcon = User;

  return (
    <li className="relative">
      <a 
        href="#pages" 
        className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md group"
        onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="relative mr-3">
              <UserIcon className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full"></span>
            </div>
            <span className="font-medium">Users</span>
          </div>
          <span className="ml-auto">
            {isOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </span>
        </div>
      </a>
      
      {isOpen && (
        <div className="pl-8 mt-1 space-y-3">
          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>{selectedUser}</span>
              {showDropdown ? (
                <ChevronUp className="w-4 h-4 ml-2" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-2" />
              )}
            </button>
            
            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1 overflow-auto text-base max-h-56">
                  {visibleMenuItems.map(item => (
                    <li 
                      key={item.id}
                      onClick={() => selectUser(item.label)}
                      className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Navigation Links */}
          <ul className="space-y-1">
            {visibleMenuItems.map(item => (
              <li key={item.id} id={item.id}>
                <a 
                  href={item.link}
                  className="flex items-center py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default UserNavigationMenu;