import React from 'react';

function SearchBox() {
  return (
    <div className="fixed bottom-10 right-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-gray-300 rounded-full py-1 pl-5 pr-12 text-black font-semibold text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
        />
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="18"
          height="18"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 19c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm4.293-2.707L20 20.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBox;
