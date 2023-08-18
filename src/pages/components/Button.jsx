import React from 'react';

const Button = ({ background, size, height, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        background === 'primary'
          ? `bg-[#ED9301] rounded-md text-white ${size} ${height} flex justify-center items-center cursor-pointer transition duration-150 ease-in-out hover:bg-[#ed9201b9] active:translate-y-[4px]`
          : `bg-[#ffff] rounded-md text-[#ED9301] border-2 border-[#ED9301] ${size} ${height} flex justify-center items-center cursor-pointer transition duration-150 ease-in-out hover:bg-[#ED9301] hover:text-white active:translate-y-[4px]`
      }`}
    >
      {title}
    </div>
  );
};

export default Button;
