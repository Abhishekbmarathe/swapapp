import React from 'react'

const circles = () => {
    return (
      <div className="">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          fill="none"
        >
          <circle cx="400" cy="300" r="400" fill="rgba(255,255,255,0.1)" />
          <circle cx="200" cy="150" r="150" fill="rgba(255,255,255,0.05)" />
          <circle cx="600" cy="450" r="100" fill="rgba(255,255,255,0.08)" />
        </svg>
      </div>
    );
  };
  

export default circles
