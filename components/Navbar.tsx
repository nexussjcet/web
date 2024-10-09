import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState<number | undefined>(); // Specify type for isActive
  function handleSelect(index: number) {
    setIsActive(index);
  }
  const items = [
    { title: 'Home', description: '' },
    { title: 'History', description: 'Our past achievements' },
    { title: 'Events', description: 'Events we hosted' },
    { title: 'Team', description: 'Meet our team members' },
  ];

  return (
    <div className="w-1/4 h-screen relative text-white">
      <div className="w-full relative flex justify-start items-center h-full">
        {items.map((item, index) => {
          const angle = (index / 3) * (Math.PI);
          const x = Math.sin(angle) * 150;
          const y = -Math.cos(angle) * 200;

          return (
            <div key={item.title} className="relative flex flex-col">
              <button 
                className={`absolute flex items-center gap-3 transform transition-transform duration-300 ${isActive === index ? 'text-white' : 'text-gray-400'}`}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                onClick={() => handleSelect(index)}
              >
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                {item.title}
              </button>
              {isActive === index && (
                <div className="absolute mt-8 text-red-500 w-full" style={{ transform: `translate(${x}px, ${y}px)`, whiteSpace: 'nowrap' }}>
                  {item.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
