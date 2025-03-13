import React from 'react';

const Nav = () => {
  const navItems = [
    { name: "FEATURED", icon: "star-selected.svg", count: 4 },
    { name: "CRICKET", icon: "icon-cricket.svg", count: 11 },
    { name: "FOOTBALL", icon: "icon-football.svg", count: 15 },
    { name: "TENNIS", icon: "icon-tennis.svg", count: 15 },
    { name: "HORSE RACING", icon: "icon-horse.svg", count: 18 },
    { name: "GREYHOUND RACING", icon: "icon-greyhound.svg", count: 54 },
    { name: "KABADDI", icon: "kabaddi.svg", count: 0 },
    { name: "POLITICS", icon: "icon-politics.svg", count: 0 },
  ];
  
  const [activeItem, setActiveItem] = React.useState("FEATURED");
  
  return (
    <div className="w-full bg-gray-800 text-white">
      <nav className="max-w-6xl mx-auto">
        <ul className="flex overflow-x-auto">
          {navItems.map((item) => (
            <li 
              key={item.name}
              className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-200 whitespace-nowrap border-b-2 ${
                activeItem === item.name 
                  ? "border-yellow-400 bg-gray-700" 
                  : "border-transparent hover:bg-gray-700"
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              <div className="flex items-center">
                <img 
                  src={`/icons/${item.icon}`} 
                  alt={`${item.name} icon`} 
                  className="w-5 h-5 mr-2" 
                />
                <span className="font-medium">{item.name}</span>
              </div>
              {item.count > 0 && (
                <div className="flex items-center">
                  <div className="ml-2 px-2 py-0.5 text-xs bg-gray-600 rounded-full">
                    {item.count}
                  </div>
                  <a 
                    href={`/${item.name.toLowerCase()}`}
                    className="ml-2 text-xs text-blue-400 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View All
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;