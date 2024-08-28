import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1)
    }
     
  return (
    <div>
    <button onClick={handleClick} >Count {count} times</button>
    </div>
  )
}

export default Counter;
