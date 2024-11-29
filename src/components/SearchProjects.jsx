import React, { useState } from 'react';

const SearchProjects = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.length >= 3|| newQuery.length === 0) {
      onSearch(newQuery);
    }
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="border p-2 rounded-lg w-64 mb-4"
        placeholder="Search projects..."
      />
      {query.length >= 3 && (
        <p className="text-gray-500 text-sm">Searching for: {query}</p>
      )}
    </div>
  );
};

export default SearchProjects;
