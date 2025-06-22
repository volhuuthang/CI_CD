import React from 'react';

const BadComponent = () => {
  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
      <h2>Bad Component</h2>
      <p>This component has an ESLint error.</p>
    </div>
  );
};

export default BadComponent;
