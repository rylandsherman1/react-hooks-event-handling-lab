// Code EyesOnMe Component Here

import React from 'react';

const EyesOnMe = () => {
    // Event handler function for the focus event
    const handleFocus = () => {
      console.log('Good!');
    };
  
    // Event handler function for the blur event
    const handleBlur = () => {
      console.log('Hey! Eyes on me!');
    };
  
    return (
      <div>
        {/* Button with focus and blur event handlers */}
        <button onFocus={handleFocus} onBlur={handleBlur}>
          Eyes on me
        </button>
      </div>
    );
  };

export default EyesOnMe;