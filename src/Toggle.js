import React from 'react';

const Toggle = ({ setDarkMode }) => (
  <div>
    <button type="button" onClick={() => setDarkMode(false)}>
      ☀
    </button>
    <button type="button" onClick={() => setDarkMode(true)}>
      ☾
    </button>
  </div>
);

export default Toggle;
