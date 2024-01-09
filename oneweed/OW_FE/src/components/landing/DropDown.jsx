import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const DropDown = ({ title, children }) => {
  const [state, setState] = useState(false);
  const setDropdown = () => {
    setState(!state);
  };
  return (
    <div className="flex flex-col gap-2 p-4 flex-co">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={setDropdown}
      >
        <h3 className="font-bold ">{title}</h3>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      {state && children}
    </div>
  );
};

export default DropDown;
