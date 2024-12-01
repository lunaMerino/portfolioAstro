import React from 'react';

const Title = ({ text }) => {
  return (
    <div>
      <h2 className="text-3xl font-poppins italic font-bold text-blackish text-center mb-8">
        {text}
      </h2>
    </div>
  );
};

export default Title;
