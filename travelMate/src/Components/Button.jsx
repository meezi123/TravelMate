import React from 'react';

const Button = ({ children, onClick, bgColor, color, type }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${color} px-5 py-2 rounded-[8px] font-[600]  `}
      type={type}

    >
      {children}
    </button>
  );
};

export default Button;
