import React, { useState, useEffect } from 'react';

const CheckboxComp = () => {
  // Initialize the state from localStorage or default to false
  const [isChecked, setIsChecked] = useState(() => {
    const savedState = localStorage.getItem('checkboxState');
    return savedState ? JSON.parse(savedState) : false;
  });

  // Save the checkbox state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('checkboxState', JSON.stringify(isChecked));
  }, [isChecked]);

  // Toggle the checkbox state
  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        Check me!
      </label>
      <button onClick={handleToggle}>Toggle Checkbox</button>
    </div>
  );
};

export default CheckboxComp;
