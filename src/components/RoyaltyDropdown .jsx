import React, { useState, useEffect, useRef } from 'react';

const RoyaltyDropdown = ({ label, value, onChange, options, fieldLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="mb-4">
      {/* Field Label (Royalty) */}
      {fieldLabel && (
        <label className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-1">
          {fieldLabel}
        </label>
      )}
      
      <div className="flex items-center gap-4">
        {/* Left side - Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div 
            className="border border-gray-300 rounded px-4 py-3 w-48 cursor-pointer bg-white flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-gray-700">
              {selectedOption ? selectedOption.label : 'Select option'}
            </span>
            <div className="flex flex-col items-center">
              <div className={`w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-600 mb-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}></div>
              <div className={`w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}></div>
            </div>
          </div>
          
          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded mt-1 shadow-lg z-10">
              {options.map((opt) => (
                <div
                  key={opt.value}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleSelect(opt.value)}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Label */}
        <div className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-1">
          {label}
        </div>
      </div>
    </div>
  );
};
export default RoyaltyDropdown;