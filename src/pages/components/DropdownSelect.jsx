import React, { useState, useEffect, useRef } from 'react';

const DropdownSelect = ({ options, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const calculateDropdownPosition = () => {
    if (dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (dropdownRect.bottom + 250 > windowHeight) {
        return 'bottom-0';
      } else {
        return 'top-[51px]';
      }
    }

    return 'top-[51px]';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsInputActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-[65%] lg:w-[55%] relative'>
      <div
        ref={dropdownRef}
        className={`border-[1px] ${isInputActive ? 'border-black border-[2px] mt-36' : 'border-[#9a9a9a]'} text-[#9a9a9a] text-lg px-5 rounded-md w-[250px] h-[50px] flex items-center cursor-pointer relative`}
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
          setIsInputActive(true);
        }}
      >
        <span className={`${selectedOption ? 'text-black' : 'text-[#9a9a9a]'}`}>
          {selectedOption || placeholder}
        </span>
        <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
          &#9660;
        </span>
      </div>
      {isDropdownOpen && (
        <ul className={`absolute border-[1px] border-[#9a9a9a] text-black rounded-md mt-1 w-[250px] bg-white ${calculateDropdownPosition()}`} style={{ zIndex: 10 }}> {/* Ajuste o valor de zIndex conforme necessário */}
          {options?.map((option) => (
            <li
              key={option}
              className='px-5 py-3 cursor-pointer hover:bg-gray-100'
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;
