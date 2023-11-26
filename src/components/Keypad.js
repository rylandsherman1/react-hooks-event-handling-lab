// Code Keypad Component Here

import React from 'react';

const Keypad = () => {
    // Event handler function for the change event
    const handleChange = () => {
      console.log('Entering password...');
    };
  
    return (
      <div>
        {/* Input field with the right type and event handler */}
        <input type="password" onChange={handleChange} />
      </div>
    );
  };

export default Keypad;