import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(getRandomValue());

  // Function to generate a random integer between 1 and 6
  function getRandomValue() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Function to handle click event
  const handleClick = () => {
    setDiceValue(getRandomValue());
  };

  return (
    <div onClick={handleClick} style={{ width: '50px', height: '50px', border: '1px solid black', textAlign: 'center', lineHeight: '50px', cursor: 'pointer' }}>
      {diceValue}
    </div>
  );
};

export default Dice;
