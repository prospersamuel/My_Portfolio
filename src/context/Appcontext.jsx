// File: src/context/AppContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    
    // Change favicon based on theme
    const favicon = document.querySelector("link[rel*='icon']");
    if (favicon) {
      if (theme === 'dark') {
        favicon.href = '/src/assets/medark.png'; // Your dark mode favicon
      } else {
        favicon.href = '/src/assets/melight.png'; // Your light mode favicon
      }
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};