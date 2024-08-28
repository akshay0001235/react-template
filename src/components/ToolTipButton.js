import React, { useState } from 'react';

function TooltipButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ padding: '10px', fontSize: '16px' }}
      >
        Hover me
      </button>
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            bottom: '120%',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '3px',
            fontSize: '12px',
            whiteSpace: 'nowrap'
          }}
        >
          Tooltip text
        </div>
      )}
    </div>
  );
}

export default TooltipButton;
