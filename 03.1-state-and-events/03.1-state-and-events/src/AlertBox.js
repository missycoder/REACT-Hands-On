import { useState } from 'react';

const AlertBox = () => {
  const [message, setMessage] = useState('');

  return (
    <div style={{ border: '4px solid black', padding: '10px' }}>
      <p>{message}</p>
    </div>
  );
};

export default AlertBox;
