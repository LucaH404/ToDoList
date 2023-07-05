import React, { useState, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(count);

  const handleIncrement = () => {
    setCount((prevCount) => {
      ref.current = prevCount;
      return prevCount + 1;
    });
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {ref.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
