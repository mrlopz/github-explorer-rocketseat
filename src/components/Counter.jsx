import React, { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0)
  
  const increment = (e) => {
    e.preventDefault();
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  )
}