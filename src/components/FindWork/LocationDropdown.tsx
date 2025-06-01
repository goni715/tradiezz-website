import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface LocationDropdownProps {
  onChange?: (value: number) => void;
  defaultValue?: number;
}

const LocationDropdown: React.FC<LocationDropdownProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(15);

  const options = [5, 10, 15, 25, 50, 100];

  const handleSelect = (value: number) => {
    setSelected(value);
    setIsOpen(false);
    console.log(value);
  };




  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 border border-gray-300 rounded bg-white"
      >
        <span className="text-gray-700">Location</span>
        <div className="flex items-center gap-2">
          <span>{selected} miles</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-sm z-40">
          {options.map((value) => (
            <li
              key={value}
              onClick={() => handleSelect(value)}
              className={`p-2 cursor-pointer hover:bg-gray-50 ${
                selected === value ? 'bg-blue-50' : ''
              }`}
            >
              {value} miles
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationDropdown;