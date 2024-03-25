import { useState } from 'react';

const NumberBox = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ 
      background: 'linear-gradient(to right, #ff7e5f, #feb47b)', 
      fontFamily: 'Verdana, sans-serif',
      padding: '20px', 
      borderRadius: '10px', 
      width: '200px', 
      textAlign: 'center' 
    }}>
      <div style={{ fontSize: '24px', marginBottom: '10px' }}>Count: {count}</div> 
      <button style={{ fontSize: '18px', marginRight: '10px' }} onClick={increaseCount}>Increase</button>
      <button style={{ fontSize: '18px' }} onClick={decreaseCount}>Decrease</button> 
    </div>
  );
};

export default NumberBox;
