import React, { useState, useEffect } from 'react';

const DarkmodeToggler = () => {
 
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const handleToggle = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className=''>
      <input

        type="checkbox"
        onChange={handleToggle}
        checked={theme === 'dark'} 
        className="toggle theme-controller"
        value={theme}
      />
    </div>
  );
};

export default DarkmodeToggler;
