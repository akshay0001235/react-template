import React, { useState } from 'react';

function HoverComponent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: isHovered ? 'lightblue' : 'lightgray',
        transition: 'background-color 0.3s ease'
      }}
    >
      Hover over me!
    </div>
  );
}

export default HoverComponent;
