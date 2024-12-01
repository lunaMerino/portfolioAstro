
import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="mt-2 bg-color7 text-white rounded-lg px-4 py-2 hover:bg-color5 transition duration-300"
    >
      {label}
    </button>
  );
};

export default Button;
