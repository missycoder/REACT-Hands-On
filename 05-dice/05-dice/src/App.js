// useState is a hook
// a hook is a function, when called, will add
// new functionality to a component
import { useState } from 'react';

const Dice = () => {
  // state variables
  const [diceValue, setDiceValue] = useState(getRandomValue());

  // generate a random integer between 1 and 6
  function getRandomValue() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // event handlers
  const handleClick = () => {
    setDiceValue(getRandomValue());
  };

  // determine text color based on dice value
  const getColor = () => {
    if (diceValue === 1) {
      return 'red';
    } else if (diceValue === 6) {
      return 'green';
    } else {
      return 'white';
    }
  };

  // return JSX
  return (
    <div>
      <h2>Random Dice Counter</h2>
      <div 
        onClick={handleClick} 
        style={{
          width: '100px', 
          height: '100px',
          border: '1px solid black',
          textAlign: 'center',
          lineHeight: '100px', 
          cursor: 'pointer',
          color: getColor(),
          borderRadius: '10px',
          background: 'linear-gradient(to bottom right, #ff6699, #ffccff)'
        }}
      >
        <span style={{ fontSize: '36px' }}>{diceValue}</span>
      </div>
    </div>
  );
};

export default Dice;
